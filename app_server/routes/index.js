var express = require('express');
var router = express.Router();

var ctrlBbnotes = require('../controllers/bbnotes.js');  //used for notes and newnote
var ctrlBbNotesLogin = require('../controllers/bbnotesLogin.js') //used for login




/*Locations pages*/      //routes to controllers/bbnotes.js when URL comes in
router.get('/notes', ctrlBbnotes.notesList);   //currently at old/notes
router.get('/newnote', ctrlBbnotes.newnote);
router.get('/notesFromApi', ctrlBbnotes.notesListFromApi); //calls new
router.get('/notesFromApi2', ctrlBbnotes.noteListFromApiRender); //calls new


/*Login Page */     //routes to controllers/bbnotesLogin.js when URL comes in
router.get('/', ctrlBbNotesLogin.login);





module.exports = router;


