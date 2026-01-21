const mongoose = require('mongoose');

const machiningSchema = new mongoose.Schema({
    customerName: String,
    date: Date,
    partName: String,
    materialGrade: String,
    cncOperations: [{
        operation: String,
        sequence: String,
        rawDiameter: Number,
        rawLength: Number,
        finishDiameter: Number,
        finishLength: Number,
        cuttingType: String,
        vc: Number,
        doc: Number,
        feed: Number,
        speed: Number,
        totalTime: Number,
        handlingTime: Number
    }],
    vmcOperations: [{
        operation: String,
        sequence: String,
        diameter: Number,
        length: Number,
        holeDetails: String,
        vc: Number,
        doc: Number,
        feed: Number,
        speed: Number,
        totalTime: Number,
        handlingTime: Number
    }],
    gearOperations: [{
        operation: String,
        diameter: Number,
        length: Number,
        module: Number,
        helixAngle: Number,
        pressureAngle: Number,
        totalTime: Number,
        handlingTime: Number
    }],
    packingOperations: [{
        type: { type: String },
        product: String,
        purpose: String,
        rate: Number,
        count: Number,
        cost: Number
    }],
    otherCharges: [{
        name: String,
        charges: Number,
        remarks: String
    }],
    totalCncTime: Number,
    totalVmcTime: Number,
    totalGearTime: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MachiningParameter', machiningSchema);
