var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema({
    Username: String,
    Password: String,
    Notes:{
        Title: String,
        Contents: String
    }
});

//mongoose.model("Notes", noteSchema);  //note: this is Ben's version
module.exports=mongoose.model('Notes', noteSchema);








/*from Bears*/
// var mongoose     = require('mongoose');
// var Schema       = mongoose.Schema;
//
// var BearSchema   = new Schema({
//     name: String
// });
//
// module.exports = mongoose.model('Bear', BearSchema);
//
//

/*from Ben week 6*/
// var mongoose = require('mongoose');
//
// var studentSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     address: String
// });
//
// mongoose.model('Student', studentSchema);




/* notes to be added
{
    Username: 'test',
        Password: 'test',
    Notes: {
    Title: 'groceries',
        Contents: 'apples, bananas, oranges'
}
}



{
    Username: 'test',
        Password: 'test',
    Notes: {
    Title: 'dances',
        Contents: 'swing, bananas, oranges'
}
}


{
    Username: 'test',
        Password: 'test',
    Notes: {
    Title: 'chips',
        Contents: 'doritos, tostidos, sun chips'
}
}

{
    Username: 'test',
        Password: 'test',
    Notes: {
    Title: 'dances',
        Contents: 'swing, bananas, oranges'
}
}

*/