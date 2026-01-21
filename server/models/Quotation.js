const mongoose = require('mongoose');

const quotationSchema = new mongoose.Schema({
    customerName: String,
    address: String,
    rfqNo: String,
    rfqDate: Date,
    quotationNo: String,
    quotationDate: Date,
    preparedBy: String,
    currency: String,
    products: [{
        partNo: String,
        partName: String,
        drawingRev: String,
        annualUsage: Number,
        batchQty: Number,
        materialPrint: String,
        materialConsidered: String,
        rawWeight: Number,
        rawCostKg: Number,
        rawCostPiece: Number,
        processCost: Number,
        packingCost: Number,
        overheads: Number,
        finalPrice: Number
    }],
    developmentCosts: [{
        partNo: String,
        partName: String,
        patternCost: Number,
        fixtureCost: Number,
        toolCost: Number,
        gaugeCost: Number,
        sampleCost: Number,
        totalDevCost: Number
    }],
    remarks: [{
        text: String
    }],
    totalProductCost: Number,
    totalDevCost: Number,
    grandTotal: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quotation', quotationSchema);
