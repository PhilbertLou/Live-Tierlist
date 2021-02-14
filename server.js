const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

//require routes here


app.use(express.json());
app.use(express.urlencoded({extended: false}));

//use routes here

// leaving for production 
// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static('client/build'));
// }

//Listening on defined port
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  });