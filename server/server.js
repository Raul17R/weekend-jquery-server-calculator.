
//having control of the server, cleint could be touched or modified by other people
//important info has to be in the server
//like transfering money has to be in the server
//depending in how important the data is, and most of it should be in the sever
//history of the calculation in the server
//POST data to the server 
//set up if else or switch in the operator and decide if we are 


const express = require ('express');


//get request for the history
const app = express ();
const PORT = 5002;

const doTheMath = [];

app.post('/math', (req, res) =>{
let numberOne = (req.body.num1);
let numberTwo = (req.body.num2);
let operator = (req.body.operator);
let total =0;
if (operator === "+") {
    total = numberOne + numberTwo;
}else if(operator === "-"){
    total = numberOne * numberTwo;
}else if(operator === "/"){
    total = numberOne / numberTwo;
}
});
//Index html
app.use(express.static('server/public'));

//Data by AJAX
app.use(express.urlencoded());



//POST data to the server 
app.post("/math", (req, res) => {
    console.log('Mathing....');

    
});





//Listening 
app.listen(PORT,() => {
    console.log('Listening on port', PORT);
})
