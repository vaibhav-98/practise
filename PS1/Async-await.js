// Async-await : - async await is a syntactical improvement build on to of promise. 
// it is allows you write Async code in more sync stly . making it esier to read and understand .
//Async function define using the 'async' keyword and they return a promise implicity.
//Inside async function you  use 'await' keyword to pause the execution untill the promise resolve or rejected.


 function createPromise () {

    return new Promise( function exec(resolve, reject) {

        setTimeout( function f(){
            console.log("timer done");
            resolve("done")
        })
    })
}

async function consume () {
    console.log("inside function");
    const response = await createPromise ()
    console.log("respone is :" , response);
}

console.log("start");
consume()
console.log("end");
