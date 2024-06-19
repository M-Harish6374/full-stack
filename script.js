let car={
    carname:"Honda</br>",
    carcolor:"Blue",
    carprize:50000
};
for(let v in car){
    document.write(car[v])
}

var a = 5;
var b = 10;

document.write(a+b+"</br>");
document.write(a-b);
document.write(a*b);
document.write(a/b);

let age = 20;

if(age>=18){
    document.write("eligible to vote</br>");
}
else{
    document.write("not eligible</br>");
}

var text="abcdefghijklmnop";

document.write(text.length+"</br>");
document.write(text.slice(0,3)+"</br>");
document.write(text.substring(0,3)+"</br>");
document.write(text+"</br>");

var str = new Array("harish",20,"Male");
for(var x in str){
    document.write(str[x]+"</br>");
}
var str1 = new Array("lion","tiger","elephant");
document.write(str1.sort());










