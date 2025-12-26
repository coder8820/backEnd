function calculateAre(width, height) {
    return width * height;
}
let width;
let height;
let area = calculateAre(10, 2);

if (area > 100) {
    console.log("Large area");
} else {
    console.log("Small area");
}

if (width + height > 100) {
    console.log("Large area which is greater than 100");
}

module.exports = calculateAre;