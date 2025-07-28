let a = [5, 8, 6, 10, 9];
let max_value = (a, b) => (a > b ? a : b);
let min_value = (a, b) => (b > a ? a : b);
function max_sequence(x) {
  let result = x[0];
  for (element of x) {
    result = max_value(result, element);
  }
  return result;
}
function min_sequence(x) {
  let result = x[0];
  for (element of x) {
    result = min_value(result, element);
  }
  return result;
}
function get_sequence(x, f) {
  let result = x[0];
  for (element of x) {
    result = f(result, element);
  }
  return result;
}

function reduce1(x, f, initial) {
  let result = initial;
  for (element of x) {
    result = f(result, element);
  }
  return result;
}

// console.log(get_sequence(a, min_value));
// console.log(get_sequence(a, max_value));

//array reducing function, total is the initial value
let getSum = (total, num) => {
  return total + Math.round(num);
};

const numbers = [15.5, 2.3, 1.1, 4.7];
// '1' is the initial value pass into getSum
console.log(numbers.reduce(getSum, 1));
