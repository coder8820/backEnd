const logicalError = () => {
    console.log("This function contains a logical error.");
    let a = 10;
    let b = 0;
    if (a < b) {
        console.log("a is greater than b", b);
    }

}