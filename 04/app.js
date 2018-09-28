var wrap = document.querySelector(".wrap");
var str = ' ';


for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
        if (i % 2 === 0 && j % 2 === 0)
            str += '<div class="b"></div>';
        else if (i % 2 === 1 && j % 2 === 1)
            str += '<div class="b"></div>';
        else
            str += '<div class="w"></div>';
    }
}
wrap.innerHTML = str;

var blocks = document.querySelectorAll('.wrap > div');


function select(event) {
  var block = event.currentTarget;
  block.style.backgroundColor = 'yellow';
  

}

for(var i=0; i < 16; i++) {
  
    blocks[i].addEventListener('click', select);
}


// function select(event) {
//     console.log('selected');
  
//     var blocks = event.currentTarget;
//     console.log(board)
  
//     if(selectedDom){
//       selectedDom.className =  selectedDom.className.replace(' select', '');
//     }
  
  
//     blocks.className += ' select';
  
//     selectedDom = block;
//   }

//   var selectedDom = null;