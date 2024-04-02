// setup module.exports
const Flight = require('../models/flight');


module.exports = {
    new: newFlight,
    create,
    index
};





//set up comtroller functions.

function newFlight (req,res) {

    res.render('flights/new', {errorMsg: ''});

}

function create(req,res) {

Flight.create(req.body)
.then(function(newFlight){
    console.log('newFlight:', newFlight);
    res.redirect('/flights'); // revisit this url path
}).catch(function(error){
    console.log('error', error);
    res.render('flights/new', {errorMsg: 'invalid data'}); // needs file path
})

    
}

function index(req,res) {
    Flight.find({})
    .then(function(flights){
        res.render('flights/index', {
            flights
        })
    }).catch(function(error){
        console.log('error:', error);
        res.render('error', {error});
        //remove for production
    })
}