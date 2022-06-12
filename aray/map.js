const numbers = [1, 4, 9, 16];
// const newNumbers = numbers.map(number => number * 2);
// console.log(newNumbers);

//////////////////////////////////////////////////////////////
//tradisonal anonymous
const newNumbers = numbers.map(function (n) {
  return "Angka " + n * 3;
});

console.log(newNumbers);
/////////////////////////////////////////////////////////////