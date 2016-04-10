'use strict';

//数组arr必须是有序的
const binarySearch = (key, arr) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if(key < arr[mid])
      high = mid - 1;
    else if(key > arr[mid])
      low = mid + 1;
    else
      return mid;
  }
  return -1;
}

//测试
const main = (argv) => {
  console.log('index:' + binarySearch(9, [1,3,4,6,8,9,9,16,17,28]));
}

if (require.main === module) {
  main();
}

exports.binarySearch = binarySearch;

