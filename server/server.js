const express = require ('express');

const app = express ();
const PORT = 5002;

const numbersToWork = {

}


//Index html
app.use(express.static('server/public'));

//Data by AJAX
app.use(express.urlencoded());



//Listening 
app.listen(PORT,() => {
    console.log('Listening on port', PORT);
})
