const { User } = require('./models');
const { Op } = require("sequelize");

// -- READ/SELECT DATA
User.findAll().then((result) => {
    result.forEach((data) => {
        console.log(`ID : ${data.id}`);
        console.log(`First Name : ${data.firstName}`);
        console.log(`Last Name : ${data.lastName}`);
        console.log(`Email : ${data.email}`);
        console.log(`--------------------`);
    });

}).catch((err) => {
    console.log(err);
});
