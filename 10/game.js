var $bug = document.querySelector('.bug');
var wrapwidth = 500;
var bugwidth = 25;
var $game = document.querySelector('.game');
$bug.addEventListener('click', addPoint);

var $point = document.querySelector('#point');

var point = 0;


function addPoint(){
    point += 1;
    $point.innerHTML = point;
}

function select(event) {
    var $block = event.currentTarget;
    $block.style.backgroundColor = 'yellow';
}
$game.addEventListener('click', addPoint);
$bug.addEventListener('click', select);
   
function move(){
    var x = random(wrapwidth - bugwidth);
    var y = random(wrapwidth  - bugwidth);
    console.log(x,y);
    $bug.style.left = x+'px';
    $bug.style.top = y+'px';
}
function random(max){
    return Math.floor(Math.random()*max);
}

setInterval(move, 1500);