//  promise :- Promise were introduced ES6 as a way  to handle async operation in more structured manner.
// It is a JS Object that represent whether on async operation (like DB or Axios Call) completed or Not.

//Promise has typicall 3 states
//1. Pandding 
//2.Rejected 
//3.fullfielled


function createPromise () {
    return new Promise( function exec (resolve, reject) {

        setTimeout( function f() {
            console.log("timer done");
            resolve("done")
        })
    })
}

console.log("start");
let x = createPromise()
console.log("got a new promise");

x.then( function fn(){
    console.log("promise Done");
})

console.log("end");


for(let i=0 ; i< 5; i++){
    console.log("inside loop");
}







