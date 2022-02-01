const { User } = require('./models');

// -- CREATE USER
const data = {
    firstName: 'Budi',
    lastName : 'Setiawan',
    email : 'budi.setiawan@gmail.com'
}

User.create(data).then((result) => {
    console.log("Sukses Insert");
}).catch((err) => {
    console.log("Gagal Insert");
});