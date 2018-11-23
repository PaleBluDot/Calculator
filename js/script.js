console.log('Hi Friend!');

// Initializing Sentry on page load
Sentry.init({ dsn: 'https://5a3a0309dc284398b61902a23d569797@sentry.io/1320631' });

var starting = 0;

// this adds the animation
// to the clear button
$("#clear").click(function(){
    $(this).addClass('clear-button');
    $("#results-container").addClass('cleared-results');
    setTimeout(function() {
        total.text('0');
    }, 1500)
})

// removes the amination class
// after it has run
$("#clear").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",
    function() {
        $(this).removeClass("clear-button");
    }
);

// removes the amination class
// after it has run
$("#results-container").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",
    function() {
        $(this).removeClass("cleared-results");
    }
);

var numOne = $('#numbers-entered');
var operator = $('.operator');
var total =  $('#calculation-results');

// gets the html value of each key
$(".keys").click(function() {
    var clickedDigit = $(this).html();
    var currentVal = numOne.text();
    var newVal;
     if ( currentVal === '0') {
        newVal = clickedDigit;
    } else {
        newVal = currentVal + clickedDigit
    }
    numOne.text(newVal)
})