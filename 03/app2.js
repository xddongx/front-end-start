var dom = document.getElementById('debug');
console.log(dom);

var dom2 = document.querySelectorAll('#debug');

console.log(dom2)

var div = document.createElement('div');
div.style.border = "1px solid red";
div.innerHTML = "<h3>asdfasdf</h3>"
document.body,appendChild(div);