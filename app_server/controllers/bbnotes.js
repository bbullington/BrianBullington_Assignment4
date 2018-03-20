var request= require('request');



var getNoteInfo = function (req, res, callback){
    console.log('getNoteInfo:');
    console.log(getNoteInfo);
    var requestOptions, path;
    path = "/api/"
    requestOptions = {
        url : 'http://localhost:3000/api/',
        method: "GET",
        json: {}
    };
    request(
        requestOptions,
        function(err, response, body){
            //console.log(err, body);
            //res.send(200, "success")
            //[{_id: oiufoj8328j0gv8h2}]
        }
    );
};

//getNoteInfo();  //runs getNoteInfo() when bbnotes is called. This will be replaced with a callback
//console.log(getNoteInfo);
//console.log(body);




// module.exports.noteListFromApi = function(req, res){      //will mimic notesList, but using API call
//     res.render('notes.jade')
// };


/*GET 'home' page */
module.exports.notesListFromApi =function(req,res){
    res.render('notesFromApi.jade',
        {
            title: 'Notes List',
            sidebar: "We think everybody has something to say (or at least we think everyone thinks they have something to say",
            pageHeader: {
                title: 'Your Note Library',
                strapline: 'Fill the page!'
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
                }
            ]
        });
};










/*Functional Code below */



/*GET 'home' page */
module.exports.notesList =function(req,res){
  res.render('notes.jade',
      {
      title: 'Notes List',
      sidebar: "We think everybody has something to say (or at least we think everyone thinks they have something to say",
      pageHeader: {
          title: 'Your Note Library',
          strapline: 'Fill the page!'
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

