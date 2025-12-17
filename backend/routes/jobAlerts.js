const express = require('express');
const router = express.Router();
const JobAlert = require('../models/JobAlert');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');

router.get('/', auth, async (req, res) => {
  try {
    const jobAlerts = await JobAlert.find().populate('createdBy claimedBy', 'name email');
    res.json(jobAlerts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', auth, roleCheck('admin', 'officer'), async (req, res) => {
  try {
    const jobAlert = await JobAlert.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json(jobAlert);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id/claim', auth, async (req, res) => {
  try {
    const jobAlert = await JobAlert.findById(req.params.id);
    if (!jobAlert) return res.status(404).json({ message: 'Job alert not found' });
    if (jobAlert.status !== 'open') return res.status(400).json({ message: 'Job alert is not available' });
    
    jobAlert.status = 'claimed';
    jobAlert.claimedBy = req.user._id;
    await jobAlert.save();
    res.json(jobAlert);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', auth, roleCheck('admin', 'officer'), async (req, res) => {
  try {
    const jobAlert = await JobAlert.findByIdAndDelete(req.params.id);
    if (!jobAlert) return res.status(404).json({ message: 'Job alert not found' });
    res.json({ message: 'Job alert deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
