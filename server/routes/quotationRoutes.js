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

// GET single quotation
router.get('/:id', async (req, res) => {
    try {
        const quotation = await Quotation.findById(req.params.id);
        if (!quotation) return res.status(404).json({ message: 'Quotation not found' });
        res.json(quotation);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE quotation
router.delete('/:id', async (req, res) => {
    try {
        const quotation = await Quotation.findById(req.params.id);
        if (!quotation) return res.status(404).json({ message: 'Quotation not found' });
        
        await quotation.deleteOne();
        res.json({ message: 'Quotation deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE quotation
router.put('/:id', async (req, res) => {
    try {
        const quotation = await Quotation.findById(req.params.id);
        if (!quotation) return res.status(404).json({ message: 'Quotation not found' });

        Object.assign(quotation, req.body);
        const updatedQuotation = await quotation.save();
        res.json(updatedQuotation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
