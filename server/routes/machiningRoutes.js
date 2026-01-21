const express = require('express');
const router = express.Router();
const MachiningParameter = require('../models/MachiningParameter');

// GET all machining entries
router.get('/', async (req, res) => {
    try {
        const machinings = await MachiningParameter.find().sort({ date: -1 });
        res.json(machinings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new machining entry
router.post('/', async (req, res) => {
    const machining = new MachiningParameter(req.body);
    try {
        const newMachining = await machining.save();
        res.status(201).json(newMachining);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
