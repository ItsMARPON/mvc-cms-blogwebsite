const {User} = require("../models");

const userData = [
    {
        "name": "Lucky Charms",
        "email": "LuckyCharms@gmail.com",
        "password": "sdfsdfjhs9879"
    },
    {
        "name": "Golden Grahams",
        "email": "GoldennGrahams12345@gmail.com",
        "password": "sisouetel98423"
    },
    {
        "name": "Honey Nut Cheerios",
        "email": "HoneyNutCheerios@gmail.com",
        "password": "poipoisss225"
    },
    {
        "name": "Fruity Dino Bites",
        "email": "FruityDinoBites@comcast.com",
        "password": "wiyerweur123"
    },
];

const seedUsers = ()=> User.bulkCreate(userData);

module.exports = seedUsers;