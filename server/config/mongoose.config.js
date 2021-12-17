const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/players', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established connection to the Database'))
    .catch((err) => console.log('Something has gone wrong with the database connection', err));