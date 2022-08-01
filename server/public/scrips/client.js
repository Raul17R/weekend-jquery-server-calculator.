const { log } = require("console");

console.log('Client sourced!');
$(readyNow);

function readyNow() {
    console.log('We are ready!');
    $('#plus-button').on('click',sum);
}

function sum() {
    $.ajax({
        type: 'GET',
        url: '/sum'
    }).then(function (response) {
        let numberOne = $('#number-one');
        let numberTwo = $('#number-two');
        let total = numberOne + numberTwo;
        console.log(total);
        // console.log(numberOne);
        // console.log(numberTwo);

    })
    
}
console.log(sum());