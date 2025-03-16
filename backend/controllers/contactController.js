const Contact = require('../models/Contact');
const asyncHandler = require('express-async-handler');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContact = asyncHandler(async (req, res) => {
  const { name, phone, email, message } = req.body;

  // Create contact submission
  const contact = await Contact.create({
    name,
    phone,
    email,
    message
  });

  if (contact) {
    res.status(201).json({
      success: true,
      message: 'Message submitted successfully',
      data: contact
    });
  } else {
    res.status(400);
    throw new Error('Invalid contact data');
  }
});

module.exports = {
  submitContact
}; 