'use strict';


const dataSet = [89, 30, 25, 32, 72, 70, 51, 42, 25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5];

const miniSet = [4, 3, 1, 2];

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



function swap(array, i, j) {
  quickCounter++;
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

//Bucket Sort O(n)
//const miniSet = [3, 5, 1, 2, 4];  High value: 5, Low value: 1.

//  first swap 1 and 5 with start and end 
//  [1, 4, 3, 2, 5] 

//Low: 0  0-2 1 bucket, 2-4 bucket, 4-6 bucket, 6-8 bucket, 8-high bucket.
//High: 10

//Recursive call for each bucket -> is it O(n)?


function bucketSort(array, high, low) {
  let start = array[0];
  let end = array[array.length -1];
  // Start at 3, check if it's equal to high, swap with end (4).
  // If it's equal to low (1), swap with start (3)

  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] === high) {
  //     swap(array, array[i], end);
  //   }
  // }
}






