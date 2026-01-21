const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Connection Error:', err));

// Routes (to be added later)
const machiningRoutes = require('./routes/machiningRoutes');
const quotationRoutes = require('./routes/quotationRoutes');
const cycleTimeRoutes = require('./routes/cycleTimeRoutes');

app.use('/api/machining', machiningRoutes);
app.use('/api/quotations', quotationRoutes);
app.use('/api/cycle-time', cycleTimeRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html')); // We might need to create an index dashboard later
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
