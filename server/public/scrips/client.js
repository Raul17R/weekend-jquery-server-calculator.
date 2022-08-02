$(document).ready(readyNow);

console.log('Client sourced!');
$(readyNow);

function readyNow() {
    console.log('We are ready!');
    $('#equal-button').on('click',sendNumbers);
}

function sendNumbers() {
    $.ajax({
        type: 'POST',
        url: '/math',
        data: {
            num1: $('#number-one').val(),
            num2: $('#number-two').val(),
            operator: $('.operator').val()
        }
    })
}