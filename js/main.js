// jshint multistr:true
$(document).ready(function() {

createButtons();
paintRightCol();


function createButtons() {
    HTML = '';
    val = ['AC', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', 'DEL', ',', '='];
    for (var i=0; i<val.length; i++) {
        HTML += '<div class="button-container">\
        <input class="button" name="' + val[i] + '" value="' + val[i] + '" />\
        </div>'
        $('.calc-button-container').html(HTML);
    }
}

function paintRightCol() {
    for(var i=0; i<5; i++) {
        $('.calc-button-container div:eq(' + (3 + i * 4) + ') input').css('background-color', '#F57E72').css('color', '#fff');
    }
}


var number_string = '',
    action_array = [];

$('.button-container').on('click', '.button', function() {
    

    value = $(this).val();

    if (!isNaN(parseInt(value))) {
        number_string += value;

        num_len = number_string.length;
        number = 0;

        for ( var i=0; i<num_len; i++) {
            number += number_string[i] * 10 ** (num_len - i -1);
        }



    } else {
        
        action_array.push(number);
        action_array.push(value);

        switch (value){
            case 'AC':

            break;
            case '±':

            break;
            case '%':

            break;
            case '÷':

            break;
            case '×':

            break;
            case '-':

            break;
            case '+':

            break;
            case 'DEL':

            break;
            case ',':

            break;
            default:
            result
            return result
        }

    }
    

    console.log(number_string, 'afaf', number, 'arar', action_array);


   
        




});



});