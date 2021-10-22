/*var a: void;
a=null;  //in void only null & undefined allowed
a=undefined;
console.log(typeof(a));*/
function shows() {
    console.log("Hello");
    document.write("Write");
}
shows();
function show() {
    console.log("Hello");
    document.write("Write");
    return 10;
}
var a = show();
console.log(a);
