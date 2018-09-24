module.exports = function solveEquation(equation) {
  var arr = [];
  var mas = equation.split(' ');

  let a = mas[0];
  let b = mas[4];
  let c = mas[8];

  if (mas[3] == '-'){
    b = -b;
  }

  if(mas[7] == '-'){
    c = -c;
  }
  let d = Math.pow(b,2) - 4*a*c;
  let x1 = Math.round((-b + Math.sqrt(d))/(2*a));
  let x2 = Math.round((-b - Math.sqrt(d))/(2*a));

  if (x1<x2){
    arr.push(x1,x2);
  }
  else {
    arr.push(x2,x1);
  }

return arr;

  // your implementation
}
