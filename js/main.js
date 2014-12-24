/**
 * Created by Rick on 18/12/2014.
 */

var $boxWidth = 500;
var $numSquaresAcross = 80;
function makeSquares() {
    var $numberSquares = $numSquaresAcross * $numSquaresAcross;                 // find total number of squares.
    var $squareSize = ($boxWidth - $numSquaresAcross * 2) / $numSquaresAcross;  // subtract 2 px per square for border of 1 px per side.
    for (var i = 0; i < $numberSquares; i++) {
        $('#squaresWrapper').append('<div class="newSquare"></div>');
    }
    $('.newSquare').height($squareSize);
    $('.newSquare').width($squareSize);
};

makeSquares();

$('.newSquare').mouseleave(function(){
    $(this).css('background-color', 'red');
});