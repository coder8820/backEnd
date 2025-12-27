const runtimeFunction = () => {
    console.log("This is a test function for runtime debugging.");
    let x = 15;
    let y = 25;
    let product = x * y;
    // product();testingSyntes
    console.log(`The product of ${x} and ${y} is ${product}`);

}
module.exports = runtimeFunction;