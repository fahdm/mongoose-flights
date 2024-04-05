// setup module.exports
const Flight = require('../models/flight');
const Ticket = require('../models/flight');




module.exports = {
    new: newFlight,
    create,
    index,
    show
};





//set up comtroller functions.

function newFlight(req, res) {

    res.render('flights/new', { errorMsg: '' });

}

async function create(req, res) {
    try {
        await Flight.create(req.body)
        res.redirect('/flights')
    } catch (error) {
        res.render('error', { message: 'error', error });
    }
}

function index(req, res) {
    Flight.find({})
        .then(function (flights) {
            res.render('flights/index', {
                flights
            })
        }).catch(function (error) {
            console.log('error:', error);
            res.render('error', { error });

        })
}

async function show(req, res) {
    try {
        const flight = await Flight.findById(req.params.id).populate([{ path: 'destinations' }, { path: 'tickets' }]);




        res.render('flights/show', { title: 'Flight Details', flight });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}




