const doSomethingWithNumbers = (num1, num2, cb) => {
  return cb(num1, num2);
};

const add = (n1, n2) => {
  return n1 + n2;
};

const subtract = (n1, n2) => {
  return n1 - n2;
};

const result = doSomethingWithNumbers(3, 5, subtract);
console.log(result);
