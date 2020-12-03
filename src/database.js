const mongoose = require('mongoose');
const URI ='mongodb://localhost/mern-task';
mongoose.connect(URI)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;