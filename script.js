/************************************Question: (1)******************************************* */
/************************************randomNum(st,end)**************************************** */

// let st= 5;
// let end=10;

// function randomNumStEnd(st,end) {
//     let randomNum = Math.floor(Math.random()*(end-st+1))+st;
//     return randomNum;
// }

// let randomNum = randomNumStEnd(st,end);
// console.log(randomNum);

/************************************Question: (2)******************************************* */
/*****************************number of vowels in a string argument***************** */

// let str = "aeiou aeiou";

// function countVowels(str) {
//     let count=0;
//     for(let i=0;i<str.length;i++) {
//         if(str[i]=='a' || str[i]=='e' || str[i]=='i'|| str[i]=='o' || str[i]=='u' || str[i]=='A' || str[i]=='E' || str[i]=='I'|| str[i]=='O' || str[i]=='U' ) {
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVowels(str);

/************************************Question: (3)******************************************* */
/************************function to extract unique character from a string************************ */

// function extractUniqueChar (str) {
//     let uniqueChar="";
//     for(let char of str) {
//         if(!uniqueChar.includes(char)) {
//             uniqueChar+=char;
//         }
//     }
//     return uniqueChar;
// }

// let extractedStr= extractUniqueChar("abcdabcdefgggh");
// console.log(extractedStr);

/************************************Question: (4)******************************************* */
/**************************longest country name***********************************************/

// let country = ["Australia", "Germany", "United states of America", "India"];

// let length = [];

// function countryNameLength(country) {
//   for (let i = 0; i < country.length; i++) {
//     let temp= country[i].length;
//     length[i] = temp;
//   }
// }
// countryNameLength(country);
// let maxLength = Math.max(...length);
// console.log(country[length.indexOf(maxLength)]);

/************************************Question: (5)******************************************* */
/********************************Array Number Average************************************** */

let arr = [1, 2, 2, 4, 5, 6, 7, 8];

let avgArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg= sum/arr.length;
  console.log(avg);
};

avgArray(arr);