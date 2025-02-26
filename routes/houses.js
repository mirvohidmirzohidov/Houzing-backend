const express = require('express');
const router = express.Router();

// Dummy data
let houses = [
  {
    id: 1,
    name: "Luxury Villa",
    description: "A beautiful villa with ocean view",
    user: {
      id: 101,
      firstname: "John",
      lastname: "Doe",
      email: "john.doe@example.com"
    },
    houseDetails: {
      room: 5,
      bath: 3,
      garage: 2,
      area: 350,
      beds: 4,
      yearBuilt: 2015
    },
    price: 123,
    salePrice: 123,
    location: {
      longitude: 45.123,
      latitude: -93.456
    },
    address: "Tashkent",
    city: "Los Angeles",
    region: "California",
    country: "USA",
    zipCode: "90001",
    attachments: [
      {
        imgPath: "./img/house3.png"
      }
    ],
    category: {
      name: "house"
    },
    status: true
  }
];

// **1. Read (GET) - Barcha uylarni olish**
router.get('/', (req, res) => {
  res.json(houses);
});

// **2. Create (POST) - Yangi uy qo‘shish**
router.post('/', (req, res) => {
  const newHouse = {
    id: houses.length + 1,
    ...req.body
  };
  houses.push(newHouse);
  res.status(201).json({ message: "Uy qo‘shildi!", house: newHouse });
});

// **3. Update (PUT) - Uyni yangilash**
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const index = houses.findIndex(h => h.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Uy topilmadi!" });
  }

  houses[index] = { ...houses[index], ...req.body };
  res.json({ message: "Uy yangilandi!", house: houses[index] });
});

// **4. Delete (DELETE) - Uyni o‘chirish**
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  houses = houses.filter(h => h.id != id);
  res.json({ message: "Uy o‘chirildi!" });
});

module.exports = router;
