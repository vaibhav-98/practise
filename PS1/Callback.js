//This is a Synchronous callBack function 


function h(x,fn) {
    //h => is HOF
    // fn => is a CallBack function
    console.log(x*x);
    fn(x*x);
}

h(10, exec)

function exec(n) {
    console.log("squared value is :" , n);
}