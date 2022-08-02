
//having control of the server, cleint could be touched or modified by other people
//important info has to be in the server
//like transfering money has to be in the server
//depending in how important the data is, and most of it should be in the sever
//history of the calculation in the server
//POST data to the server 
//set up if else or switch in the operator and decide if we are 


const express = require ('express');
const bodyParser = require( 'body-parser' );

//get request for the history
const app = express ();
const PORT = 5002;
//Index html
app.use(express.static('server/public'));
//Data by AJAX
//app.use(express.urlencoded());
app.use( bodyParser.urlencoded( { extended: true } ) )
const math = [];

app.post('/math', (req, res) =>{
// math.push(req.body);
let num1 = Number(req.body.numberOne) 
let num2 = Number(req.body.num2) 
let operator = req.body.operator;
let result;
if (operator === "+") {
    result = num1 + num2;
}else if(operator === "-"){
    result = num1 - num2;
}else if(operator === "/"){
    result = num1 / num2;
}else if(operator === "*"){
    result = num1 * num2;
}
//let results = Number(numberOne)Number(num2);
res.send(String( result ));
let data = {result,...req.body}
math.push(data);
//res.sendStatus(200);

});

app.get('/math-history',(req, res) =>{
    res.send(math);
})


//Listening 
app.listen(PORT,() => {
    console.log('Listening on port', PORT);
})
