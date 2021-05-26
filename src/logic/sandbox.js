
const sortStrings = (toSort = [], sortType = '') => {// or default sortType = 'oldest'?
  let copyToSort = [...toSort];
 if (sortType === 'oldest'){
   console.log('hello')
   return copyToSort;
 }
if (sortType === 'newest'){
    return copyToSort.reverse();
}
if (sortType === 'a'){
  return copyToSort.sort();
}
 if (sortType === 'z'){
   copyToSort = copyToSort.sort(); 
   return copyToSort.reverse(); 
 }
if (sortType === 'shortest'){
copyToSort.sort((a, b) => a.length - b.length);
return copyToSort;
  };
  }



sortStrings(['a', '22', '4444', '333'], 'shortest');
sortStrings(['', 'bb', 'dddd', 'ccc'], 'shortest');

// STRATEGY1:

// - get Array
// - we loop - every item -> item.length
// - we push to new array
// - we sort new array ( 1, 2, 3)
// - assign words back to lengths

// words array - > keys words values length -> sort values -> extract keys
// words array - > keys length values words -> sort keys -> extract values

//if greater - push after, is smaller push before

// const arr = (e, i) => {
//   return {index: i, value: e.length}
// }

// function myFunction() {
//   points.sort(function(a, b){return a-b});

// const splitObject = (obj) => {
//   let arrayOfObjects = []; // create final array
//   const allKeys = Object.keys(obj); // get all the keys
//   arrayOfObjects = allKeys.map((key) => { // to fill up obj with arrays we loop
//     return { [key]: obj[key] }; // assigns keys from 'arr' to values from 'obj'
//   });
//   return arrayOfObjects; // return final array
// };

//  const intersection = (arr1 = [], arr2 = []) => {
//   // create a object to track elements
//   const objMap = {};

//   // create a new set to avoid duplicates in final result
//   const result = new Set([]);

//   // if they don't have any in common
//   if (arr1.length === 0 || arr2.length === 0) {
//     return 'at least one array is empty';
//   }
//   // add a value to compare in next step
//   arr2.forEach((i) => {
//     objMap[i] = 1;
//   });
//   // condition to compare keys and values
//   arr1.forEach((i) => {
//     if (objMap[i] === 1) {
//       // add new element to new Set
//       result.add(i);
//     } else {
//       // don't add element
//     }
//   });
//   // make array to final result
//   return Array.from(result);
// };