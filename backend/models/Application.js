const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  position: {
    type: String,
    required: true,
    enum: [
      'web-designer', 
      'web-developer', 
      'mobile-designer', 
      'mobile-developer', 
      'digital-marketer'
    ]
  },
  experience: {
    type: Number,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  resumePath: {
    type: String,
    required: true
  },
  appliedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Application', ApplicationSchema);