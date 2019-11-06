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
Memory address will be moved to 3 to allow more room
*/

/* 
length = 3;
capacity = 12;
memory address= 3

length will be decremented after each pop, however
capacity and memory address will not be altered. The memory
will just allow the previous addresses to be overwritten
*/


const filterArray = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5)
      newArr.push(arr[i]);
  }
  return newArr;
};

// console.log(filterArray([1,2,3,4,5,6,7,8,9]));

const theMaxSum = (arr) => {
  let maxSum = null;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
};

// console.log(theMaxSum([4, 6, -3, 5, -2, 1]));

const mergeArrays = (arr1, arr2) => {
  let mergedArr = [];
  let i = 0;

  do {
    if (arr1[i] < arr2[i]) {
      if (arr2[i] === undefined)
        mergedArr.push(arr1[i]);
      else if (arr1[i] === undefined)
        mergedArr.push(arr2[i]);
      else {
        mergedArr.push(arr1[i]);
        mergedArr.push(arr2[i]);
      }
    } else {
      mergedArr.push(arr2[i]);
      mergedArr.push(arr1[i]);
    }
    i++;
  }
  while (i < arr1.length || i < arr2.length);

  return mergedArr;
};

console.log(mergeArrays([1, 3, 6, 8, 11, 12, 13], [2, 3, 5, 8, 9]));

const removeCharacters = (str) => {
  let newStr = str.replace(/[aeiou]/gi, '');
  return newStr;
};

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny'));

const productsArray = (arr) => {
  let results = [];
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product = product * arr[j];
      }
    }
    results.push(product);
    product = 1;
  }
  return results;
};

// console.log(productsArray([1, 3, 9, 4]));

/* const multiArray = () => {

} */

function stringRotation(str1, str2){
  if(str1.length !== str2.length){
    return false;
  }
  let string = str1 + str1;
  return string.includes(str2);
}
console.log(stringRotation('amazon', 'azonma'));
console.log(stringRotation('amazon', 'azonam'));