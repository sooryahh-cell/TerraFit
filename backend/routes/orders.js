const express = require('express');
const router = express.Router();

// POST place order
router.post('/', async (req, res) => {
    try {
        const { items } = req.body;
        // For now just confirm order received
        res.status(201).json({ message: '✅ Order placed!', items });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;