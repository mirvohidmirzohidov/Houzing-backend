const mongoose = require("mongoose");

const HouseSchema = new mongoose.Schema({
    name: String,
    description: String,
    user: {
        id: Number,
        firstname: String,
        lastname: String,
        email: String
    },
    houseDetails: {
        room: Number,
        bath: Number,
        garage: Number,
        area: Number,
        beds: Number,
        yearBuilt: Number
    },
    price: Number,
    salePrice: Number,
    location: {
        longitude: Number,
        latitude: Number
    },
    address: String,
    city: String,
    region: String,
    country: String,
    zipCode: String,
    attachments: [{
        imgPath: String
    }],
    category: {
        name: String
    },
    status: Boolean
});

module.exports = mongoose.model("House", HouseSchema);
