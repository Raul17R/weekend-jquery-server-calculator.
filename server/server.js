const express = require ('express');

const app = express ();
const PORT = 5002;



//Listening 
app.listen(PORT,() => {
    console.log('Listening on port', PORT);
})
