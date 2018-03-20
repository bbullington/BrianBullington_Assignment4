var express = require('express');
var router= express.Router();
var MongoClient= require('mongodb').MongoClient;
var url= "mongodb://localhost:27017/noteDb";
var ctrlNotes= require('../controllers/notes.js');
var Note= require('../models/notes');
var mongoose = require('mongoose');


/* testing whether the get, post, put, and delete requests are getting through.
Note: html requests to '/api' come here as '/'
 */

// router.get('/', function(req, res, next){                //LocalHost3000 starting level of 'api/' comes across here just as '/'
//     res.render('../views/index.jade', {title: 'Get /'});
//     console.log("hitting /api ('/') the  with push");
// });


router.route('/')
    // .get(function(req, res, next){
    //     MongoClient.connect(url, function(err, db) {
    //         if (err) throw err;
    //         var dbo = db.db("noteDb");
    //         dbo.collection("noteCollection").findOne({}, function(err, result) {
    //             if (err) throw err;
    //             res.send(result);
    //             db.close();
    //         });
    //     });
    // })
//
//
        .get(function(req, res, next){          //works, but returns array
        MongoClient.connect(url, function(err, db){
           if(err) throw err;
           var dbo=db.db("noteDb");
           dbo.collection("noteCollection").find({}).toArray(function(err, result){
               if(err) throw err;
               console.log(result);
               res.send(result);
               db.close();
           });

        });
    })

    // .get(function(req, res, next){
    //     MongoClient.connect(url, function(err, db){
    //         if(err) throw err;
    //         var dbo=db.db("noteDb");
    //         dbo.collection("noteCollection").find({},function(err, result){
    //             if(err) throw err;
    //             console.log(result);
    //             res.send(result);
    //             db.close();
    //         });
    //
    //     });
    // })




//     .get(function(req, res){
//         //res.json({message: 'you made it to the api again!'});
//         Note.find(function(err, noteCollection){
//             if(err)
//                 res.send(err);
//             res.json({message: 'you made it to the api again!'});
// //            res.json(noteCollection);
//
//         });
//     })

    .post(function(req, res){
        var newNote= new Note();
        newNote.Username = req.body.name;
        newNote.save(function(err){
            if (err)
                res.send(err);
            res.json({message: "New note created"});
        });


//        res.json({message: 'you made it to the post again!'});

    });

module.exports = router;

//
//
// router.get('/', function(req, res){
//     res.json({message: 'you made it to the api!'});
//
// });
//
//
// router.post('/', function(req, res, next){
//     res.render('../views/index.jade', {title: 'Post'});
//     console.log("hitting /api ('/') the  with post");
// });
//
// router.put('/', function(req, res, next){
//      res.render('../views/index.jade', {title: 'Put'});
//      console.log("hitting /api ('/') the  with put");
// });
//
// router.delete('/', function(req, res, next){
//     res.render('../views/index.jade', {title: 'Delete'});
//     console.log("hitting /api ('/') the  with delete");
// });
//
//
// router.get('/notes', function(req, res){
//     res.json({message: 'you made it to the notesList!'});
//
// });





// module.exports.newnote =function(req,res){
//     res.render('newnote.jade', {title:'Note Editor'});  //.jade added for clarity. This sends for index.jade, giving it a variable for title
// };





//placeholder index file, directly copied from standard index file


//var ctrlBbnotes = require('../controllers/bbnotes.js');  //used for notes and newnote
// var ctrlBbnotes = require('../../app_server/controllers/bbnotes.js'); //placeholder
// var ctrlBbNotesLogin = require('../../app_server/controllers/bbnotesLogin');
//var ctrlBbNotesLogin = require('../controllers/bbnotesLogin.js') //used for login
//
//
//
//
// /*Locations pages*/      //routes to controllers/bbnotes.js when URL comes in
// router.get('/notes', ctrlBbnotes.notesList);
// router.get('/api', ctrlBbnotes.notesList);
// router.get('/newnote', ctrlBbnotes.newnote);
//
//
// /*Login Page */     //routes to controllers/bbnotesLogin.js when URL comes in
// router.get('/', ctrlBbNotesLogin.login);

//
//
//
//



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
