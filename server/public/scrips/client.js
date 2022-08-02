$(document).ready(readyNow);

console.log('Client sourced!');
$(readyNow);
let selectedOperator;
function readyNow() {
    console.log('We are ready!');
    $('#equal-button').on('click',sendNumbers);

    $('#plus-button').on('click',getSelectedOperator)
    $('#minus-button').on('click',getSelectedOperator)
    $('#multiply-button').on('click',getSelectedOperator)
    $('#devide-button').on('click',getSelectedOperator)
    // $('.operator').on('click',getSelectedOperator)

    $('#clear-button').on('click',clearInput);

}

function sendNumbers(event) {
    // event.preventDefault();
    event.stopImmediatePropagation();
    $.ajax({
        type: 'POST',
        url: '/math',
        data: {
            numberOne: parseInt($('#number-one').val()),
            num2: $('#number-two').val(),
            operator: selectedOperator,
        }
    }).then(function(response){
        $('#answers').empty();
       $('#answers').append('<p>'+ response+ '</p>');
       getNumbers()
    })
}
function getNumbers(){
    $.ajax({
        type: 'GET',
        url: '/math-history'
    }).then(function(response){

        $('#history').empty();
        for(let item of response){
        $('#history').append(`
            <li> ${item.numberOne} ${item.operator} ${item.num2} = ${item.result}</li>
        `)
        
    }
    
    }) 
}

function clearInput() {
    $('#number-one').val('');
    $('#number-two').val('');
}
function getSelectedOperator() {
    selectedOperator = this.textContent; //Operator Symbol + - / *
}