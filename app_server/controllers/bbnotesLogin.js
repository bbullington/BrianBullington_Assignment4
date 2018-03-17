

/*GET 'home' page */
module.exports.login =function(req,res){
  res.render('index.jade', {title: 'Login'}
  );
};

