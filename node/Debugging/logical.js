const logicalError = () => {
    console.log("This function contains a logical error.");
    // let a = 10;
    // let b = 0;
    // if (a < b) {
    //     console.log("a is greater than b", b);
    // }
    // else {
    //     console.log("a is less than b", a);
    // }
    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
    }

}

module.exports = logicalError;