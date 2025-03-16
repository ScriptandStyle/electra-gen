const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
const cors = require('cors');
const postmarkTransport = require('nodemailer-postmark-transport');
require('dotenv').config();

const Application = require('./models/Application');
const newsletterRoutes = require('./routes/newsletter');
const contactRoutes = require('./routes/contact');

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'your-production-domain.com'],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads', 'resumes');
fs.mkdirSync(uploadsDir, { recursive: true }); // Create directory if it doesn't exist

app.use('/uploads', express.static(uploadsDir));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// File Upload Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // Use the full path
  },
  filename: (req, file, cb) => {
    // Sanitize filename to prevent potential security issues
    const sanitizedFileName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
    cb(null, `${Date.now()}-${sanitizedFileName}`);
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext === '.pdf' || ext === '.doc' || ext === '.docx') {
      return cb(null, true);
    }
    cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB file size limit
  }
});

// Create Postmark transporter
const transporter = nodemailer.createTransport(postmarkTransport({
  auth: {
    apiKey: 'c542366c-0636-481a-9ea8-33e1c9e69f0a'
  }
}));

// Improved Email Sending Function with Retry and Detailed Error Handling
async function sendEmail(mailOptions, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      // Add timeout to prevent indefinite hanging
      const sendResult = await Promise.race([
        transporter.sendMail(mailOptions),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Email send timeout')), 10000)
        )
      ]);

      console.log(`Email sent successfully on attempt ${attempt}`);
      return sendResult;

    } catch (error) {
      console.error(`Email sending attempt ${attempt} failed:`, {
        message: error.message,
        code: error.code,
        stack: error.stack
      });

      // Specific error handling
      if (error.code === 'ETIMEDOUT' || error.code === 'ESOCKET') {
        if (attempt < maxRetries) {
          const backoffTime = Math.pow(2, attempt) * 1000; // Exponential backoff
          console.log(`Retrying in ${backoffTime/1000} seconds...`);
          await new Promise(resolve => setTimeout(resolve, backoffTime));
        } else {
          // Log to a file or external logging service in production
          console.error('Max email send retries exceeded');
          throw new Error('Failed to send email after multiple attempts');
        }
      } else {
        // For non-timeout errors, immediately throw
        throw error;
      }
    }
  }
}

// Alternative SMTP Configuration (Fallback)
const fallbackTransporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false,
  auth: {
    user: 'apikey',
    pass: process.env.FALLBACK_EMAIL_PASS // Your SendGrid API key
  }
});

// Enhanced Email Sending with Fallback
async function sendEmailWithFallback(mailOptions) {
  try {
    // First attempt with primary transporter
    await sendEmail(mailOptions);
  } catch (primaryError) {
    console.warn('Primary email transporter failed. Attempting fallback...');
    
    try {
      // Use fallback transporter
      const fallbackTransport = fallbackTransporter || transporter;
      await sendEmail(mailOptions, fallbackTransport);
    } catch (fallbackError) {
      console.error('Both email transporters failed', {
        primaryError,
        fallbackError
      });
      
      // In production, consider:
      // 1. Logging to external service
      // 2. Storing email in database for later retry
      // 3. Sending admin notification
      
      throw new Error('Complete email send failure');
    }
  }
}

// Position Titles Mapping
const positionTitles = {
  'web-designer': 'Web Designer',
  'web-developer': 'Web Developer',
  'mobile-designer': 'Mobile App Designer',
  'mobile-developer': 'Mobile App Developer',
  'digital-marketer': 'Digital Marketer'
};

// Career Application Route
app.post('/api/careers', upload.single('resume'), async (req, res) => {
  try {
    const { 
      name, 
      phone, 
      email, 
      position, 
      experience, 
      details 
    } = req.body;

    // Validate file upload
    if (!req.file) {
      return res.status(400).json({ 
        success: false, 
        message: 'Resume is required' 
      });
    }

    // Create new application
    const newApplication = new Application({
      name,
      phone,
      email,
      position,
      experience: parseInt(experience),
      details,
      resumePath: req.file.path
    });

    // Save application
    await newApplication.save();

    // Use the new sendEmailWithFallback function
    await sendEmailWithFallback({
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL,
      subject: `NEW APPLICATION: ${positionTitles[position]}`,
      html: `
        <h2>New Job Application Received</h2>
        <p><strong>Position:</strong> ${positionTitles[position]}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Experience:</strong> ${experience} years</p>
        <p><strong>Details:</strong> ${details}</p>
      `,
      attachments: [{
        path: req.file.path
      }]
    });

    // Similar modification for applicant confirmation email
    await sendEmailWithFallback({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Application Received',
      html: `
        <h2>Thank You for Your Application</h2>
        <p>Dear ${name},</p>
        <p>We have received your application for the ${positionTitles[position]} position. 
        We will review your application and get back to you soon.</p>
        <p>Best regards,<br>Your Company Name</p>
      `
    });

    res.status(201).json({ 
      success: true, 
      message: 'Application submitted successfully' 
    });

  } catch (error) {
    console.error('Application submission error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit application. Please try again later.' 
    });
  }
});

app.use('/api/newsletter', newsletterRoutes);
app.use('/api/contact', contactRoutes);

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong! Please try again later.'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 