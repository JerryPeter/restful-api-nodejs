const { User } = require('./models');

//-- UPDATE DATA
const data = {
    firstName: 'Rudi',
    lastName : 'Gunawan',
    email : 'rudi.gunawan@gmail.com'
}

User.update(data, { where : {id : 6}}).then((result) => {
    console.log("Sukses Update");
}).catch((err) => {
    console.log("Gagal Update");
});