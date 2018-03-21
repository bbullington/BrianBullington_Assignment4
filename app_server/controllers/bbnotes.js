var request= require('request');


//*****Get Localhost3000/old/notesFromApi2    Uses API and callbacks to produce page

//creates jade page using notesFromApi.jade, hard coded title for page, and using notesArray passed in
var renderNotesListFromApi2 = function(req, res, noteArray){
    res.render('notesFromApi.jade',
        {
            title: 'Notes List',
            sidebar: "We think everybody has something to say (or at least we think everyone thinks they have something to say",
            pageHeader: {
                title: 'Your Note Library',
                strapline: 'Using API and Callback'
            },
            noteCollection: noteArray
        }
    );
};

//connects to API at http://localhost:3000/api
var getNoteInfo2 = function (req, res, callback){
    console.log('getNoteInfo:');
    console.log(getNoteInfo);
    var requestOptions, path;
    path = "/api/";
    requestOptions = {
        url : 'http://localhost:3000/api/',
        method: "GET",
        json: {}
    };
    request(
        requestOptions,
        function(err, response, body){
            //console.log('made it to 1');
            callback(req, res, body);  //<<<<< comment this out, and currently functioning
            console.log(err, body);
            console.log('made it to 2');
            }
        );
};

module.exports.noteListFromApiRender=function(req, res)
{
    getNoteInfo2(req, res, function (req, res, responseData) {
            renderNotesListFromApi2(req, res, responseData);
            }
    );
};

// end /notesFromApi2






/*GET 'notesFromApi' page using a global variable to pull out the json file. Creates apiBody, which goes into the Noteinfo, picks up the API info, then is passed. This is obsolete now that the callback version is functional */

var apiBody = 'before';  //temp solution.  Creating a global variable that gets set once getNoteInfo is run

var getNoteInfo = function (req, res, callback){
    console.log('getNoteInfo:');
    console.log(getNoteInfo);
    var requestOptions, path;
    path = "/api/";
    requestOptions = {
        url : 'http://localhost:3000/api/',
        method: "GET",
        json: {}
    };
    request(
        requestOptions,
        function(err, response, body){
            // callback(req, res, body);  //<<<<< comment this out, and currently functioning
            // console.log(err, body);
            //res.send(200, "success")
            //[{_id: oiufoj8328j0gv8h2}]
            //return body;
            apiBody=body;
            //console.log(apiBody);
        }
    );
};



//getNoteInfo();  //runs getNoteInfo() when bbnotes is called. This will be replaced with a callback
//console.log(getNoteInfo);
//console.log(apiBody);



module.exports.notesListFromApi =function(req,res){
    res.render('notesFromApi.jade',
        {
            title: 'Notes List',
            sidebar: "We think everybody has something to say (or at least we think everyone thinks they have something to say",
            pageHeader: {
                title: 'Your Note Library',
                strapline: 'Api but using global variable pass!'
                },
            noteCollection: apiBody
        });
};










/*Functional Code below */



/*GET '/old/notes' page  using hard coded data*/
module.exports.notesList =function(req,res){
  res.render('notes.jade',
      {
      title: 'Notes List',
      sidebar: "We think everybody has something to say (or at least we think everyone thinks they have something to say",
      pageHeader: {
          title: 'Your Note Library',
          strapline: 'Generated using hardcoded data!'
          },
      storednotes: [
          {
            title: 'That one time I drove fast',
            text: 'I felt the need, the need for speed. Unfortunately the cop felt the need, the need to ticket write. the rest, as they say, is history.',
            tags: ['Driving', 'Bad Choices Make Good Stories', 'Oops'],
            views: '54'
          },{
            title: 'Lifting myself by my Bootstraps',
            text: 'Today I added bootstrap to my site. Wow. That is all I have to say. I think of all those poor teenagers making GeoCities sites and I wonder what they would think if they could see me now.',
            tags: ['learn for life', 'adult homework'],
            views: '2'
          },{
            title: 'Soccer Life',
            text: 'There are some who say soccer is life. There are some who just say that sentence is redundant, i n the same way that saying Nick Cage is Nick Cage is redundant',
            tags: ['Soccer','Sporting Life'],
            views: '1.5k'
          },{
              title: 'Soccer Life The sequal',
              text: 'There are some who say soccer is life. There are some who just say that sentence is redundant, i n the same way that saying Nick Cage is Nick Cage is redundant',
              tags: ['Soccer', 'Sporting Life'],
              views: '1.5k'
          },{
              title: 'Soccer Life3',
              text: 'There are some who say soccer is life. There are some who just say that sentence is redundant, i n the same way that saying Nick Cage is Nick Cage is redundant',
              tags: ['Soccer','Sporting Life'],
              views: '1.5k'
          },{
              title: 'Soccer Life4',
              text: 'There are some who say soccer is life. There are some who just say that sentence is redundant, i n the same way that saying Nick Cage is Nick Cage is redundant',
              tags: ['Soccer','Sporting Life'],
              views: '1.5k'
          },{
              title: 'Soccer Life5',
              text: 'There are some who say soccer is life. There are some who just say that sentence is redundant, i n the same way that saying Nick Cage is Nick Cage is redundant',
              tags: ['Soccer','Sporting Life'],
              views: '1.5k'
          },{
              title: 'Soccer Life6',
              text: 'There are some who say soccer is life. There are some who just say that sentence is redundant, i n the same way that saying Nick Cage is Nick Cage is redundant',
              tags: ['Soccer','Sporting Life'],
              views: '1.5k'
          },{
              title: 'Soccer Life9',
              text: 'There are some who say soccer is life. There are some who just say that sentence is redundant, i n the same way that saying Nick Cage is Nick Cage is redundant',
              tags: ['Soccer','Sporting Life'],
              views: '1.5k'
          },{
              title: 'Soccer Life10',
              text: 'There are some who say soccer is life. There are some who just say that sentence is redundant, i n the same way that saying Nick Cage is Nick Cage is redundant',
              tags: ['Soccer','Sporting Life'],
              views: '1.5k'
          }
      ]
  });
};


/*GET 'new note' page */
module.exports.newnote =function(req,res){
    res.render('newnote.jade', {title:'Note Editor'});  //.jade added for clarity. This sends for index.jade, giving it a variable for title
};

