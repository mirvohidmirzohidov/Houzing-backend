const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/:id', async (req, res) => {
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(400).json({ error: 'User not found' });

    if (user.likedHouses.includes(req.params.id)) {
        user.likedHouses = user.likedHouses.filter(h => h.toString() !== req.params.id);
    } else {
        user.likedHouses.push(req.params.id);
    }

    await user.save();
    res.json(user.likedHouses);
});

router.get('/:userId', async (req, res) => {
    const user = await User.findById(req.params.userId).populate('likedHouses');
    res.json(user.likedHouses);
});

module.exports = router;