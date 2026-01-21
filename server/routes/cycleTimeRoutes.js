const express = require('express');
const router = express.Router();
const CycleTimeCalculation = require('../models/CycleTimeCalculation');

// GET all cycle time calculations
router.get('/', async (req, res) => {
    try {
        const calculations = await CycleTimeCalculation.find().sort({ createdAt: -1 });
        res.json(calculations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new cycle time calculation (optional cache/history log)
router.post('/', async (req, res) => {
    const calculation = new CycleTimeCalculation(req.body);
    try {
        const newCalculation = await calculation.save();
        res.status(201).json(newCalculation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
