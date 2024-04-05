// require mongoose
const mongoose = require('mongoose');

// establish connection to mongoDb
mongoose.connect(process.env.DATABASE_URL);

// connected event listener

const db = mongoose.connection;

db.on('connected', () => {

    console.log(`connected to MongDB ${db.name} on ${db.host}: ${db.port}`)

});