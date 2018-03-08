'use strict';


const dataSet = [89, 30, 25, 32, 72, 70, 51, 42, 25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5];

const miniSet = [4, 3, 10, 5];

//QuickSort

let quickCounter = 0;

function swap(array, i, j) {
  quickCounter++;
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function quickSort(array, start=0, end=array.length) {
  quickCounter++;
  start = start;
  end = end;

  //Base case
  if (start >= end) {
    return array;
  }

  //Recursive case
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
}

// console.log(quickSort(dataSet), 'counter:', quickCounter);

//MergeSort

let mergeCounter = 0;

function mergeSort(array) {
  mergeCounter++;
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  mergeCounter++;
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i=leftIndex; i<left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i=rightIndex; i<right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

// console.log(mergeSort(dataSet), 'counter', mergeCounter);

// const miniSet = [4, 3, 1, 2];


function swap(array, i, j) {
  quickCounter++;
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

//Bucket Sort O(n)

//Example steps
//Initial array:[1, 4, 7, 2, 9]
//1. Set up a new array with 18 slots , # equal start ++ -> end
//2. Insert true at the index that matches the value from the original array
//3. [true, true, '', true, '', '', true, '', true];
//4. Loop through the above array, when true, push that index + 1 into the final array
//5. Output array: [1, 2, 4, 7 9]

function bucketSort(array, high, low) {
  let slotArray = new Array(high - low + 1);
  let sortArray = [];

  for (let i = 0; i < array.length; i++) {
    slotArray[array[i] - low] = true;
  }

  for (let i = 0; i < slotArray.length; i++) {
    if (slotArray[i] === true) {
      sortArray.push(i + low);
    }
  }
  return sortArray;
}

function bucketSortDupe(array, high, low) {
  let slotArray = new Array(high - low + 1);
  let sortArray = [];

  for (let i = 0; i < array.length; i++) {
    if(slotArray[array[i] - low] === undefined) {
      slotArray[array[i] - low] = 1;
    } else {
      slotArray[array[i] - low]++;
    }
  }
  // console.log(slotArray);
  for (let i = 0; i < slotArray.length; i++) {
    if (slotArray[i] !== undefined) {
      for (let j = 0; j < slotArray[i]; j++) {
        sortArray.push(i + low);
      }
    }
  }
  return sortArray;
}

// console.log(bucketSort(dataSet, 98, 1));



//Sort in Place

//loop through our array
//we have a random variable assigned each loop
// [4, 3, 10, 5]
//swap our index with random
// function randomSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let newArray = [...array.slice(0, i), ...array.slice(i + 1, array.length)];
//     let random = newArray[Math.floor(Math.random() * newArray.length)];
//     swap(array, i, array.indexOf(random));
//   }
//   return array;
// }

// console.log(randomSort(dataSet));


//Sorting books
//1. Sorted strings into lowercase + no spaces
//2. Loop through each string

//Check out Radix, Heap, Insertion, and Selection sort.

//Using Radix sort 
//1. Iterate over each string, and push string[i] into a new array.
//2. 

const booksArray = ['Words of Radiance', 'A Clash of Kings', 'The Two Towers', 'Neuromancer', 'The Goblet of Fire', 'Dune', 'Ready Player One', 'Deadhouse Gates'];

//Do A-Z buckets instead of 0-9
function sortBooks(array, charLocation=0) {

  for (let i = 0; i < array.length; i++) { 
    array[i] = array[i].toLowerCase().replace(/\s/g, '');
  }

  let slotArray = new Array(27);
  let sortArray = [];
  let ASCIIShift = 97;

  for (let i = 0; i < array.length; i++) {
    if (slotArray[array[i].charCodeAt(charLocation) - ASCIIShift] === undefined) {
      slotArray[array[i].charCodeAt(charLocation) - ASCIIShift] = [array[i]];
    }
    else {
      slotArray[array[i].charCodeAt(charLocation) - ASCIIShift].push(array[i]);
    }
  }

  // for (let i = 0; i < slotArray.length; i++) {
  //   if (slotArray[i].length > 1) {
  //     for (let j = 0; j < slotArray[i].length; j++) {

  //     }
  //   }
  // }

  console.log(slotArray);
}

// sortBooks(booksArray);

function insertSort(array) {
  for (let i = 0; i < array.length; i++) { 
    array[i] = array[i].toLowerCase().replace(/\s/g, '');
  }
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] > array[j]) {
        
      }
    }
  }
}