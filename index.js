const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
// Load env
dotenv.config({ path: './config.env' });

// ----------------------- DB ----------------------------


// ----------------------- load app -----------------------
const app = express();

// ----------------------- MIDDLEWARE ---------------------
app.use(bodyParser.json());
// ------------------------ Dev ---------------------------------
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


// -------------------------- ROUTES ------------------------------

// require('./routes/authRoutes')(app); 



// --------------------- Handle production ---------------------------
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}




// ----------------------- LISTENER -------------------------------------

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
