const express = require('express');
const router = express.Router();

// Dummy data
let houses = [
  {
    "id": 1,
    "name": "Luxury Villa",
    "description": "A beautiful villa with ocean view",
    "user": {
      "id": 101,
      "firstname": "John",
      "lastname": "Doe",
      "email": "john.doe@example.com"
    },
    "houseDetails": {
      "room": 5,
      "bath": 3,
      "garage": 2,
      "area": 350,
      "beds": 4,
      "yearBuilt": 2015
    },
    "price": 123,
    "salePrice": 123,
    "location": {
      "longitude": 45.123,
      "latitude": -93.456
    },
    "address": "Tashkent",
    "city": "Los Angeles",
    "region": "California",
    "country": "USA",
    "zipCode": "90001",
    "attachments": [
      {
        "imgPath": "./img/house3.png"
      }
    ],
    "category": {
      "name": "house"
    },
    "status": true
  },
  {
    "id": 2,
    "name": "Cozy Apartment",
    "description": "A modern apartment with city view",
    "user": {
      "id": 102,
      "firstname": "Jane",
      "lastname": "Smith",
      "email": "jane.smith@example.com"
    },
    "houseDetails": {
      "room": 3,
      "bath": 1,
      "garage": 1,
      "area": 120,
      "beds": 2,
      "yearBuilt": 2020
    },
    "price": 85,
    "salePrice": 80,
    "location": {
      "longitude": 34.567,
      "latitude": -118.123
    },
    "address": "New York",
    "city": "New York",
    "region": "New York",
    "country": "USA",
    "zipCode": "10001",
    "attachments": [
      {
        "imgPath": "./img/house2.png"
      }
    ],
    "category": {
      "name": "apartment"
    },
    "status": true
  },
  {
    "id": 3,
    "name": "Mountain Chalet",
    "description": "A charming chalet in the mountains",
    "user": {
      "id": 103,
      "firstname": "Alice",
      "lastname": "Williams",
      "email": "alice.williams@example.com"
    },
    "houseDetails": {
      "room": 4,
      "bath": 2,
      "garage": 1,
      "area": 250,
      "beds": 3,
      "yearBuilt": 2018
    },
    "price": 150,
    "salePrice": 140,
    "location": {
      "longitude": 36.789,
      "latitude": -119.123
    },
    "address": "Aspen",
    "city": "Aspen",
    "region": "Colorado",
    "country": "USA",
    "zipCode": "81611",
    "attachments": [
      {
        "imgPath": "./img/house1.png"
      }
    ],
    "category": {
      "name": "chalet"
    },
    "status": true
  },
  {
    "id": 4,
    "name": "Beach House",
    "description": "A beachfront property with a stunning view",
    "user": {
      "id": 104,
      "firstname": "Bob",
      "lastname": "Johnson",
      "email": "bob.johnson@example.com"
    },
    "houseDetails": {
      "room": 6,
      "bath": 4,
      "garage": 3,
      "area": 450,
      "beds": 5,
      "yearBuilt": 2012
    },
    "price": 250,
    "salePrice": 230,
    "location": {
      "longitude": 27.123,
      "latitude": -80.456
    },
    "address": "Miami",
    "city": "Miami",
    "region": "Florida",
    "country": "USA",
    "zipCode": "33101",
    "attachments": [
      {
        "imgPath": "https://example.com/images/beachhouse1.jpg"
      }
    ],
    "category": {
      "name": "house"
    },
    "status": true
  },
  {
    "id": 5,
    "name": "Penthouse Suite",
    "description": "A luxurious penthouse in the city center",
    "user": {
      "id": 105,
      "firstname": "David",
      "lastname": "Martinez",
      "email": "david.martinez@example.com"
    },
    "houseDetails": {
      "room": 4,
      "bath": 2,
      "garage": 2,
      "area": 300,
      "beds": 3,
      "yearBuilt": 2021
    },
    "price": 200,
    "salePrice": 190,
    "location": {
      "longitude": 40.712,
      "latitude": -74.006
    },
    "address": "New York",
    "city": "New York",
    "region": "New York",
    "country": "USA",
    "zipCode": "10007",
    "attachments": [
      {
        "imgPath": "https://example.com/images/penthouse1.jpg"
      }
    ],
    "category": {
      "name": "penthouse"
    },
    "status": true
  },
  {
    "id": 6,
    "name": "Modern Loft",
    "description": "A stylish loft with industrial design",
    "user": {
      "id": 106,
      "firstname": "Eve",
      "lastname": "Taylor",
      "email": "eve.taylor@example.com"
    },
    "houseDetails": {
      "room": 2,
      "bath": 1,
      "garage": 1,
      "area": 90,
      "beds": 1,
      "yearBuilt": 2017
    },
    "price": 75,
    "salePrice": 70,
    "location": {
      "longitude": 51.507,
      "latitude": -0.128
    },
    "address": "London",
    "city": "London",
    "region": "England",
    "country": "UK",
    "zipCode": "EC1A 1BB",
    "attachments": [
      {
        "imgPath": "https://example.com/images/loft1.jpg"
      }
    ],
    "category": {
      "name": "loft"
    },
    "status": true
  },
  {
    "id": 7,
    "name": "Countryside Cottage",
    "description": "A cozy cottage in the countryside",
    "user": {
      "id": 107,
      "firstname": "Frank",
      "lastname": "Lee",
      "email": "frank.lee@example.com"
    },
    "houseDetails": {
      "room": 3,
      "bath": 2,
      "garage": 1,
      "area": 150,
      "beds": 2,
      "yearBuilt": 2010
    },
    "price": 90,
    "salePrice": 85,
    "location": {
      "longitude": 52.354,
      "latitude": -1.772
    },
    "address": "Oxford",
    "city": "Oxford",
    "region": "England",
    "country": "UK",
    "zipCode": "OX1 2JD",
    "attachments": [
      {
        "imgPath": "https://example.com/images/cottage1.jpg"
      }
    ],
    "category": {
      "name": "cottage"
    },
    "status": true
  },
  {
    "id": 8,
    "name": "Lakefront Cabin",
    "description": "A peaceful cabin by the lake",
    "user": {
      "id": 108,
      "firstname": "George",
      "lastname": "Miller",
      "email": "george.miller@example.com"
    },
    "houseDetails": {
      "room": 4,
      "bath": 2,
      "garage": 1,
      "area": 200,
      "beds": 3,
      "yearBuilt": 2016
    },
    "price": 110,
    "salePrice": 105,
    "location": {
      "longitude": 39.739,
      "latitude": -104.990
    },
    "address": "Denver",
    "city": "Denver",
    "region": "Colorado",
    "country": "USA",
    "zipCode": "80202",
    "attachments": [
      {
        "imgPath": "https://example.com/images/cabin1.jpg"
      }
    ],
    "category": {
      "name": "cabin"
    },
    "status": true
  },
  {
    "id": 9,
    "name": "Urban Flat",
    "description": "A chic flat in the heart of the city",
    "user": {
      "id": 109,
      "firstname": "Sophia",
      "lastname": "Davis",
      "email": "sophia.davis@example.com"
    },
    "houseDetails": {
      "room": 2,
      "bath": 1,
      "garage": 1,
      "area": 85,
      "beds": 1,
      "yearBuilt": 2022
    },
    "price": 120,
    "salePrice": 115,
    "location": {
      "longitude": 48.856,
      "latitude": 2.352
    },
    "address": "Paris",
    "city": "Paris",
    "region": "Île-de-France",
    "country": "France",
    "zipCode": "75001",
    "attachments": [
      {
        "imgPath": "https://example.com/images/flat1.jpg"
      }
    ],
    "category": {
      "name": "flat"
    },
    "status": true
  },
  {
    "id": 10,
    "name": "Suburban Home",
    "description": "A spacious home in a quiet neighborhood",
    "user": {
      "id": 110,
      "firstname": "William",
      "lastname": "Brown",
      "email": "william.brown@example.com"
    },
    "houseDetails": {
      "room": 5,
      "bath": 3,
      "garage": 2,
      "area": 320,
      "beds": 4,
      "yearBuilt": 2019
    },
    "price": 140,
    "salePrice": 135,
    "location": {
      "longitude": 37.774,
      "latitude": -122.419
    },
    "address": "San Francisco",
    "city": "San Francisco",
    "region": "California",
    "country": "USA",
    "zipCode": "94105",
    "attachments": [
      {
        "imgPath": "https://example.com/images/home1.jpg"
      }
    ],
    "category": {
      "name": "home"
    },
    "status": true
  },
  {
    "id": 11,
    "name": "City Loft",
    "description": "A bright loft in the city center",
    "user": {
      "id": 111,
      "firstname": "Olivia",
      "lastname": "Green",
      "email": "olivia.green@example.com"
    },
    "houseDetails": {
      "room": 3,
      "bath": 1,
      "garage": 1,
      "area": 120,
      "beds": 2,
      "yearBuilt": 2023
    },
    "price": 130,
    "salePrice": 125,
    "location": {
      "longitude": 34.052,
      "latitude": -118.243
    },
    "address": "Los Angeles",
    "city": "Los Angeles",
    "region": "California",
    "country": "USA",
    "zipCode": "90015",
    "attachments": [
      {
        "imgPath": "https://example.com/images/loft2.jpg"
      }
    ],
    "category": {
      "name": "loft"
    },
    "status": true
  },
  {
    "id": 12,
    "name": "Coastal Retreat",
    "description": "A serene retreat by the coast",
    "user": {
      "id": 112,
      "firstname": "Liam",
      "lastname": "White",
      "email": "liam.white@example.com"
    },
    "houseDetails": {
      "room": 5,
      "bath": 3,
      "garage": 2,
      "area": 400,
      "beds": 5,
      "yearBuilt": 2018
    },
    "price": 180,
    "salePrice": 170,
    "location": {
      "longitude": 35.689,
      "latitude": 139.692
    },
    "address": "Tokyo",
    "city": "Tokyo",
    "region": "Kanto",
    "country": "Japan",
    "zipCode": "100-0001",
    "attachments": [
      {
        "imgPath": "https://example.com/images/retreat1.jpg"
      }
    ],
    "category": {
      "name": "retreat"
    },
    "status": true
  },
  {
    "id": 13,
    "name": "Villa Royale",
    "description": "An exclusive villa with private pool",
    "user": {
      "id": 113,
      "firstname": "Mia",
      "lastname": "Harris",
      "email": "mia.harris@example.com"
    },
    "houseDetails": {
      "room": 6,
      "bath": 4,
      "garage": 3,
      "area": 500,
      "beds": 6,
      "yearBuilt": 2016
    },
    "price": 300,
    "salePrice": 290,
    "location": {
      "longitude": 34.052,
      "latitude": -118.243
    },
    "address": "Beverly Hills",
    "city": "Beverly Hills",
    "region": "California",
    "country": "USA",
    "zipCode": "90210",
    "attachments": [
      {
        "imgPath": "https://example.com/images/villa2.jpg"
      }
    ],
    "category": {
      "name": "villa"
    },
    "status": true
  },
  {
    "id": 14,
    "name": "Countryside Estate",
    "description": "A grand estate surrounded by nature",
    "user": {
      "id": 114,
      "firstname": "Ethan",
      "lastname": "Evans",
      "email": "ethan.evans@example.com"
    },
    "houseDetails": {
      "room": 7,
      "bath": 5,
      "garage": 3,
      "area": 600,
      "beds": 7,
      "yearBuilt": 2015
    },
    "price": 350,
    "salePrice": 340,
    "location": {
      "longitude": 39.290,
      "latitude": -76.612
    },
    "address": "Baltimore",
    "city": "Baltimore",
    "region": "Maryland",
    "country": "USA",
    "zipCode": "21201",
    "attachments": [
      {
        "imgPath": "https://example.com/images/estate1.jpg"
      }
    ],
    "category": {
      "name": "estate"
    },
    "status": true
  },
  {
    "id": 15,
    "name": "Seaside Mansion",
    "description": "A luxurious mansion with sea views",
    "user": {
      "id": 115,
      "firstname": "Zoe",
      "lastname": "King",
      "email": "zoe.king@example.com"
    },
    "houseDetails": {
      "room": 8,
      "bath": 5,
      "garage": 4,
      "area": 700,
      "beds": 8,
      "yearBuilt": 2013
    },
    "price": 400,
    "salePrice": 380,
    "location": {
      "longitude": 36.778,
      "latitude": -122.419
    },
    "address": "Santa Barbara",
    "city": "Santa Barbara",
    "region": "California",
    "country": "USA",
    "zipCode": "93101",
    "attachments": [
      {
        "imgPath": "https://example.com/images/mansion1.jpg"
      }
    ],
    "category": {
      "name": "Villa"
    },
    "status": true
  },
  {
    "id": 16,
    "name": "Downtown Studio",
    "description": "A compact studio in the city center",
    "user": {
      "id": 116,
      "firstname": "Mason",
      "lastname": "Wright",
      "email": "mason.wright@example.com"
    },
    "houseDetails": {
      "room": 1,
      "bath": 1,
      "garage": 0,
      "area": 50,
      "beds": 1,
      "yearBuilt": 2022
    },
    "price": 60,
    "salePrice": 55,
    "location": {
      "longitude": 40.748,
      "latitude": -73.985
    },
    "address": "New York",
    "city": "New York",
    "region": "New York",
    "country": "USA",
    "zipCode": "10001",
    "attachments": [
      {
        "imgPath": "https://example.com/images/studio1.jpg"
      }
    ],
    "category": {
      "name": "Studio"
    },
    "status": true
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
