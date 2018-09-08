var str = '111222';
    console.log(str);

function add100(){
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
        
        sum += i;
        document.writeln(i);
        //console.log(i);
    }return sum;
}console.log(add100());


for (var i = 1; i <= 100; i++){
    if(i%2)
    document.writeln(i);
}

for (var i = 2; i <= 9; i++){
    document.writeln(i + "단입니다.");
    for (var k = 1;k <= 9; k++){
        document.writeln(i + "X" + k + "=" + i * k);
    }
}