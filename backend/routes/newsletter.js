const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Newsletter subscription endpoint
router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, error: 'Email is required' });
  }

  try {
    // Send confirmation email to subscriber
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Electragen Newsletter!',
      html: `
        <h2>Thank you for subscribing to Electragen Newsletter!</h2>
        <p>You will now receive updates about our latest innovations and news.</p>
        <p>Best regards,</p>
        <p>The Electragen Team</p>
      `
    });

    // Here you would typically also save the email to your database
    // For example: await Newsletter.create({ email });

    res.json({ success: true, message: 'Successfully subscribed to newsletter!' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ success: false, error: 'Failed to subscribe to newsletter' });
  }
});

module.exports = router; 