

var globalEC = "added"

function a(){
    var a = "inside a function"
    console.log(a);
    debugger ;
    b ();
    console.log("b function completed");

}

function b() {
    debugger;
    console.log("inside b function");
    c ()
}

function c() {
    debugger;
    console.log("inside c function");
    
}




debugger;
console.log("global EC");
a();