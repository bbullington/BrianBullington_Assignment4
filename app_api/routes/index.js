var express = require('express');
var router= express.Router();
var ctrlNotes= require('../controllers/notes.js');


router.get('/api', function(req, res, next){
    res.render('../app_server/views/index.jade', {title: 'Get /'});
    console.log("hit the git");

});







//placeholder index file, directly copied from standard index file


//var ctrlBbnotes = require('../controllers/bbnotes.js');  //used for notes and newnote
var ctrlBbnotes = require('../../app_server/controllers/bbnotes.js'); //placeholder
var ctrlBbNotesLogin = require('../../app_server/controllers/bbnotesLogin');
//var ctrlBbNotesLogin = require('../controllers/bbnotesLogin.js') //used for login
//
//
//
//
// /*Locations pages*/      //routes to controllers/bbnotes.js when URL comes in
router.get('/notes', ctrlBbnotes.notesList);
router.get('/api', ctrlBbnotes.notesList);
router.get('/newnote', ctrlBbnotes.newnote);
//
//
// /*Login Page */     //routes to controllers/bbnotesLogin.js when URL comes in
router.get('/', ctrlBbNotesLogin.login);
//
//
//
//
//
module.exports = router;


/* from GettingMean cpt 6 *******************/

// var express = require('express');
// var router = express.Router();
// var ctrlLocations = require('../controllers/locations');
// var ctrlReviews = require('../controllers/reviews');
//
// router.get('/locations', ctrlLocations.locationsListByDistance);
// router.post('/locations', ctrlLocations.locationsCreate);
// router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
// router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);
// router.delete('/locations/:locationid', ctrlLocations.locationsDeleteOne);
//
// // reviews
// router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
// router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
// router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
// router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);
//
// module.exports = router;
//

/* from bears *********************/

// router.route('/bears/:bear_id')
//
// // get the bear with that id
//     .get(function(req, res) {
//         Bear.findById(req.params.bear_id, function(err, bear) {
//             if (err)
//                 res.send(err);
//             res.json(bear);
//         });
//     })
//     //
//     // update the bear with this id
//     .put(function(req, res) {
//         Bear.findById(req.params.bear_id, function(err, bear) {
//
//             if (err)
//                 res.send(err);
//
//             bear.name = req.body.name;
//             bear.save(function(err) {
//                 if (err)
//                     res.send(err);
//
//                 res.json({ message: 'Bear updated!' });
//             });
//
//         });
//     })
//
//     // // delete the bear with this id
//     .delete(function(req, res) {
//         Bear.remove({
//             _id: req.params.bear_id
//         }, function(err, bear) {
//             if (err)
//                 res.send(err);
//
//             res.json({ message: 'Successfully deleted' });
//         });
//     });
//
//
// // REGISTER OUR ROUTES -------------------------------
// app.use('/api', router);
//
// // START THE SERVER
// // =============================================================================
// app.listen(port);
// console.log('Magic happens on port ' + port);
