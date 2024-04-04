const Flight = require('../models/flight');

module.exports = {
  create
};

async function create(req, res) {

    console.log(Flight);

    console.log(req.params.id);
    try {
        // Save any changes made to the movie doc
    const flight = await Flight.findById(req.params.id);
        // We can push (or unshift) subdocs into Mongoose arrays
        flight.destinations.push(req.body);
    await flight.save();
    res.redirect(`/flights/${flight._id}`)

  } catch (err) {
    console.log(err);
  }
}
  // Step 5:  Respond to the Request (redirect if data has been changed)