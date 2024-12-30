const express = require('express');
const router = express.Router();

// Placeholder for results
let results = [];

// Get all results
router.get('/', (req, res) => {
    res.json(results);
});

// Add a new result
router.post('/', (req, res) => {
    const { value } = req.body;
    if (value) {
        results.push(value);
        res.status(201).json({ message: 'Result added', results });
    } else {
        res.status(400).json({ message: 'Invalid input' });
    }
});

// Predict next result (basic average logic)
router.get('/predict', (req, res) => {
    if (results.length < 5) {
        return res.status(400).json({ message: 'Not enough data for prediction' });
    }
    const avg = results.slice(-5).reduce((a, b) => a + b) / 5;
    res.json({ prediction: avg.toFixed(2) });
});

module.exports = router;