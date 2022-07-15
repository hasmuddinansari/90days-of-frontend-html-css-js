function volume(area, size) {
  return area * size;
}

 function calculateArea(height, width, callback) {
  const area = height * width;
  if (typeof callback === "function") {
    let result = callback(area, height);
    console.log("result", result);
  }
  console.log("Area", area);
  return area;
}

module.exports = {
  calculateArea,
  volume,
}

// calculateArea

// console.log(calculateArea);

// calculateArea(5, 10, volume);

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subs(a, b) {
  return a - b;
}

function calculate(a, b, method) {
  return method(a, b);
}

console.log(calculate(2, 3, add));
console.log(calculate(2, 3, multiply));
console.log(calculate(2, 3, subs));
