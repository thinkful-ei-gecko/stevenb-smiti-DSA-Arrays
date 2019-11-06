const Array = require('./Array');

const main = () => {

  Array.SIZE_RATIO = 3;
  let arr = new Array();

  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr);
};

main();

/* 
length = 1;
capacity = 3;
memory address= 0
*/

/* 
length = 6;
capacity = 12;
memory address= 3

Length will increase to 6 and will equal the set _capacity, thus
creating a new capacity of 12
Memory address will increment to 3
*/