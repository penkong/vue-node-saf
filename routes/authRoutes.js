const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');
module.exports = app => {
  //it use services/passport new GoogleStrategy
  app.get('/auth/google', passport.authenticate('google', {
    session: false,
    scope: ['profile', 'email']
  }));
  // we have the code now
  // exchange code , passport handle for us and catch info see code
  // passport understand now user have code not like first time get req in top
  // passport middle ware take out code for us 
  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/surveys');
  });

  app.get('/api/logout', async (req, res) => {
    await req.logOut();
    req.session = null;
    return res.redirect('/');
  });
  // these req user come after passport work done
  app.get('/api/current_user', (req, res) => {  
    res.send(req.user);
  });
}