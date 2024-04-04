const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({

    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'SEA', 'DEN', 'LAX', 'SFO', 'SAN', 'IAD', 'DBX', 'AMS', 'HEL', 'IST', 'EBB'],
    },

    arrival: {
        type: Date,
    }

});



const flightSchema = new Schema({


    destinations: {
        type: [destinationSchema]

    },


    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Delta', 'Alaska', 'Spirit', 'Virgin', 'Emirates', 'Qatar', 'Ethiad']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'SEA', 'DEN', 'LAX', 'SFO', 'SAN', 'IAD', 'DBX', 'AMS', 'HEL', 'IST'],
        default: 'SEA'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function () {
            // Set default value to one year from the current date
            const oneYearFromNow = new Date();
            return new Date().setFullYear(new Date().getFullYear() + 1);

        }
    },

}, { timestamps: true });

// complile the schema into a model, and export it

module.exports = mongoose.model('Flight', flightSchema);




