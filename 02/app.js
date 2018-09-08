var str = '111';
    console.log(str);

for(var i=1;i<101;i++) {
    document.writeln(i);
    //console.log(i);
}

for(var i=1;i<101;i++){
    if(i%2)
    document.writeln(i);
}

for(var  i=2;i<=9;i++){
    document.writeln(i+"단입니다.");
    for(var k = 1;k<=9;k++){
        document.writeln(i+"X"+k+"="+ i*k);
    }
}