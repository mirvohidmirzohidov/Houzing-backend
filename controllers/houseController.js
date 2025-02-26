const House = require("../models/House");

// Barcha uylarni olish
exports.getHouses = async (req, res) => {
    try {
        const houses = await House.find();
        res.json(houses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Bitta uy qo‘shish
exports.createHouse = async (req, res) => {
    try {
        const house = new House(req.body);
        await house.save();
        res.status(201).json(house);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// ID orqali uy olish
exports.getHouseById = async (req, res) => {
    try {
        const house = await House.findById(req.params.id);
        if (!house) return res.status(404).json({ message: "Uy topilmadi" });
        res.json(house);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Uy yangilash
exports.updateHouse = async (req, res) => {
    try {
        const house = await House.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!house) return res.status(404).json({ message: "Uy topilmadi" });
        res.json(house);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Uy o‘chirish
exports.deleteHouse = async (req, res) => {
    try {
        const house = await House.findByIdAndDelete(req.params.id);
        if (!house) return res.status(404).json({ message: "Uy topilmadi" });
        res.json({ message: "Uy o‘chirildi" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
