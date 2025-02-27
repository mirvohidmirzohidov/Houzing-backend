const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const houseRoutes = require('./routes/houses');
const likeRoutes = require('./routes/likes');

dotenv.config();
const app = express();

app.use(express.json());

// ✅ Asosiy yo‘nalishni qo‘shamiz
app.get("/", (req, res) => {
    res.send("Backend ishlayapti! 🚀");
});

const cors = require('cors');
app.use(cors());


// ✅ Static fayllar uchun favicon 404 xatosini oldini olish
app.get('/favicon.ico', (req, res) => res.status(204));

// ✅ API route-larni to‘g‘ri qo‘shish
app.use('/api/auth', authRoutes);
app.use('/api/houses', houseRoutes);
app.use('/api/likes', likeRoutes);

// ✅ MongoDB ga ulanayotganini tekshirish
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// ✅ PORTni to‘g‘ri olish
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
