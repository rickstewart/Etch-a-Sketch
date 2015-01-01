/**
 * Created by Rick on 01/01/2015.
 * Happy New Years!
 */

/* set default values */
var $boxWidth = 500;
var $numSquaresAcross = 16;
var $sqColor = 'red';

/* Define the function to create some number of squares */
function makeSquares() {
    var $numberSquares = $numSquaresAcross * $numSquaresAcross;                 // find total number of squares.
    var $squareSize = ($boxWidth - $numSquaresAcross * 2) / $numSquaresAcross;  // subtract 2 px per square for border of 1 px per side.
    for (var i = 0; i < $numberSquares; i++) {
        $('#squaresWrapper').append('<div class="newSquare"></div>');
    }
    $('.newSquare').height($squareSize);
    $('.newSquare').width($squareSize);
};

/* Define the function to generate a random color */
function randomColor() {
    return ('#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6));
}

/* Define the function to color the individual squares */
function colorSquares() {
    $('.newSquare').mouseleave(function () {
        if ($('#basic').is(':checked')) {
            $(this).css('background-color', $sqColor);
        } else {
            $(this).css('background-color', randomColor());
        }
    });
};

/* call the functions makeSquares() and colorSquares() first time on page load */
makeSquares();
colorSquares();

/* Define the function for when user selects a Radio Button for the color */
$(".color").click(function () {
    var value = $(this).val();
    $sqColor = value;
    $('#squaresWrapper').css('border-color', value);
});

/* Define a function for when user clicks Clear Button */
$('#clearButton').click(function () {
    $numSquaresAcross = prompt("Please enter the number of squares per row: ", "Min. of 2 and Max. of 100");
    if ($numSquaresAcross > 1 && $numSquaresAcross < 101) {
        $('#squaresWrapper').empty();
        makeSquares();
        colorSquares();
    } else {
        alert("Value was not between 2 and 100, try again...")
    }
});
