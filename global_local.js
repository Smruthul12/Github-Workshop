//global vs local and functions
var mglobal=10;
function fun1(){
   var oopsglobal=12;
   console.log("local :"+oopsglobal);
}
function fun2(){
    var op="";
    if(typeof mglobal!="undefined")
    {
        op+="global: "+mglobal;
    }
    if(typeof oopsglobal!="undefined")
    {
        op+="local: "+oppsglobal;
    }
    console.log(op);
}
fun1();
fun2();

console.log();
var outerwear="Tshirt";
function outfit(){
    var outerwear="sweater";
    return outerwear;
}
console.log(outfit());
console.log(outerwear);