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

// GET specific machining entry
router.get('/:id', async (req, res) => {
    try {
        const machining = await MachiningParameter.findById(req.params.id);
        if (!machining) return res.status(404).json({ message: 'Machining parameter not found' });
        res.json(machining);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE machining entry
router.put('/:id', async (req, res) => {
    try {
        const updatedMachining = await MachiningParameter.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMachining) return res.status(404).json({ message: 'Machining parameter not found' });
        res.json(updatedMachining);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE machining entry
router.delete('/:id', async (req, res) => {
    try {
        const machining = await MachiningParameter.findByIdAndDelete(req.params.id);
        if (!machining) return res.status(404).json({ message: 'Machining parameter not found' });
        res.json({ message: 'Machining parameter deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
