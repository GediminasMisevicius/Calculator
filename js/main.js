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
    action_array = [],
    result = 0;
    number = 0;
    screen = '';

$('.button-container').on('click', '.button', function() {
    
    value = $(this).val();

    screen += value;
    $('.calc-screen').html(screen);

    if (value == '='){
        action_array.push(number);
        if (action_array.length == 1) {
            result = 0;
        } else {
            calculationFunction(action_array);
        }
        $('.calc-screen').html(screen + result);
        console.log('result', result);
        action_array = [];
        number_string = '';
        screen = '';
        number = 0;
        

    } else if (!isNaN(parseInt(value))) {

        number_string += value;

        num_len = number_string.length;
        number = 0;

        for ( var i=0; i<num_len; i++) {
            number += number_string[i] * 10 ** (num_len - i -1);
        }
     
    } else {

        action_array.push(number);
        action_array.push(value);
        number_string = '';
    }
    if (value == 'AC') {
        number_string = '',
        action_array = [],
        result = 0;
        number = 0;
        screen = '';
        $('.calc-screen').html(screen);
    }
    
      console.log(action_array);
});

function calculationFunction(action_array){
    
    if (action_array.length == 1) {
        result = action_array[0];
        return result;
    }
    
    for (var i = 0; i < action_array.length; i++){
        if (action_array[i] == ','){
            dot_len = action_array[i + 1].toString().length;
            dot_num = action_array[i + 1] * 10 ** (-dot_len);
            new_num = action_array[i-1] + dot_num;
            action_array.splice(i-1, 3, new_num);
            calculationFunction(action_array);
            break;
        }
    }
        
        for (var i = 0; i < action_array.length; i++){
            if (action_array[i] == '×') {
                new_num = action_array[i-1] * action_array[i + 1];
                action_array.splice(i-1, 3, new_num);
                calculationFunction(action_array);
                break;
            }
        }

        for (var i = 0; i < action_array.length; i++){
            if (action_array[i] == '÷') {
                new_num = action_array[i-1] / action_array[i + 1];
                action_array.splice(i-1, 3, new_num);
                calculationFunction(action_array);
                break;
            }
        }
        for (var i = 0; i < action_array.length; i++){
            if (action_array[i] == '+') {
                new_num = action_array[i-1] + action_array[i + 1];
                action_array.splice(i-1, 3, new_num);
                calculationFunction(action_array);
                break;
            }
        }
        for (var i = 0; i < action_array.length; i++){
            if (action_array[i] == '-') {
                new_num = action_array[i-1] - action_array[i + 1];
                action_array.splice(i-1, 3, new_num);
                calculationFunction(action_array);
                break;
            }
        }
}






});