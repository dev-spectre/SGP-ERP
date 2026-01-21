const mongoose = require('mongoose');

const cycleTimeSchema = new mongoose.Schema({
    rawDiameter: Number,
    finishDiameter: Number,
    length: Number,
    vc: Number,
    depthOfCut: Number,
    feed: Number,
    spindleSpeed: Number,
    passes: Number,
    timePerPass: Number,
    totalTimeMinutes: Number,
    totalTimeSeconds: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CycleTimeCalculation', cycleTimeSchema);
