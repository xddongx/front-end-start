//start...
//input입력받기

var input = document.querySelector('#memo');
var list = document.querySelector('#list');
var form = document.querySelector('.new-task');


function addTodo(event){

    // if (event.keyCode === 13){
    //     var todo = input.nodeValue;
    //     console.log(todo);
    // }
//console.log(event);
var todo = input.value;
console.log(todo);
insertTodo(todo);

event.preventDefault();
}


//input .addEventListener('keydown', addTodo);
form.addEventListener('submit', addTodo);

function insertTodo(todo){
var html = `<li>
    <button class="delete">×</button>
    <input type="checkbox" class="toggle-checked">
    <span class="text">${todo}</span>
    </li>`;

list.innerHTML += html;
}