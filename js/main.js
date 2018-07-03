// jshint multistr:true
$(document).ready(function() {

createButtons();
paintRightCol();


function createButtons() {
    HTML = '';
    val = ['AC', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', 'DEL', ',', '='];
    for (var i=0; i<val.length; i++) {
        HTML += '<div class="button-container">\
        <button class="button">' + val[i] + '</button>\
        </div>'
        $('.calc-button-container').html(HTML);
    }
}

function paintRightCol() {
    for(var i=0; i<5; i++) {
       $('.calc-button-container div:eq(' + (3 + i * 4) + ') button').css('background-color', '#F57E72').css('color', '#fff');
    }
}

$('.button-container').on('click', '.button', function() {


});



});