//Closure in  action that is inner function can have access to the outer function
//variable/parameters as well as the gloable variable .


const outfun = (a) => {
    let b= 10;

    const innerFun = () => {
        let sum = a+b;
        console.log(sum);
    }
    return innerFun
}
let inner = outfun(5)
inner()




// closure with setTimeOut

const errorMessage = "file not found"
setTimeout( function callBack() {
    console.log(errorMessage);
},5000)

