const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');

router.get('/', auth, roleCheck('admin', 'officer'), async (req, res) => {
  try {
    const messages = await Message.find().populate('sender', 'name email').sort('-createdAt');
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', auth, roleCheck('admin', 'officer'), async (req, res) => {
  try {
    const message = await Message.create({ content: req.body.content, sender: req.user._id });
    const populated = await message.populate('sender', 'name email');
    res.status(201).json(populated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
