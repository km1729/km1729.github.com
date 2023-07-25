const calculator = {
  add: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  mutiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  },
  power: function(a, b) {
    return a ** b;
  },
};


const plusResult = calculator.add(2, 3);
console.log(calculator.add(2, 3));
// const minusResult = calculator.minus(plusResult,4);
// const mutiplyResult = calculator.mutiply(minusResult,4);
// const divideResult =calculator.divide(3,mutiplyResult);
// const powerResult =calculator.power(3,divideResult);
