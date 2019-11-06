function urllifyString(str){
    let count = 0;
    let newstring = '';
    for(let i=0; i<str.length; i++){
        if(str[i] === ' '){
            newstring += '%20';
        }
        else{
            newstring += str[i];
        }
          
    }
    return newstring;
}

//console.log(urllifyString('www.thinkful.com /co  urse'));
//The time complexity is o(n) 

function filterarray(arr){
  let newarr = [];

  for(let i =0; i<arr.length; i++){
      if(arr[i]>= 5){
          newarr.push(arr[i]);
      }
      
  }
  return newarr;
}

//console.log(filterarray([10,34,2,4,5,6,6,6]));
//The time complexity is o(n) 

function maxSum(arr){
    let max = 0;
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = arr[i];
        for(let j= i+1; j<arr.length; j++){
            sum += arr[j];
            if(sum > max){
                max = sum;
            }
        }      

    }
    return max;
}

//console.log(maxSum([4, 6, -3, 5, -2, 1]));
//The time complexity is 0(n^2)



function removeCharacters(string, vowel){
    let result = '';
    
    for(let i=0; i < string.length; i++){
        let contains = true;
        for(let j=0; j < vowel.length;j++){
            if(string[i] === vowel[j]){
                contains = false;
            }
        }
        if(contains){
            result += string[i];
        }
     }
    return result;
}

//console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
 //Time Complexity: 0(n^2)

 function products(arr){
     let result = [];

     for(let i = 0; i<arr.length; i++){
         let prod = 1;
         for(let j=i+1; j<arr.length; j++){
             if(arr[i] !== arr[j]){
                 prod *= arr[j];

             }
         }
         result.push(prod);
     }
     return result;
 }

 console.log(products([1, 3, 9, 4]));