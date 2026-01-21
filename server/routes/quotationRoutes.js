const express = require('express');
const router = express.Router();
const Quotation = require('../models/Quotation');

// GET all quotations
router.get('/', async (req, res) => {
    try {
        const quotations = await Quotation.find().sort({ quotationDate: -1 });
        res.json(quotations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new quotation
router.post('/', async (req, res) => {
    const quotation = new Quotation(req.body);
    try {
        const newQuotation = await quotation.save();
        res.status(201).json(newQuotation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
