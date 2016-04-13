'use strict';

const SortBase = require('./SortBase');

class QuickSort extends SortBase {
  constructor() {
    super();
  }

  //切分方法
  partition(arr, low, high) {
    let i = low, j = high + 1;
    let v = arr[low];
    while (true) {
      while (this.less(arr[++i], v)) {
        if (i === high) break;
      }
      while (this.less(v, arr[--j])) {
        if (j === low) break;
      }
      if (i >= j) break;
      this.exch(arr, i, j);
    }
    this.exch(arr, low, j);
    return j;
  }

  sort(arr) {
    this.quickSort(arr, 0, arr.length - 1);
  }

  quickSort(arr, low, high) {
    if (high <= low)
      return;
    let j = this.partition(arr, low, high);
    this.quickSort(arr, low, j - 1);
    this.quickSort(arr, j + 1, high);
  }
}

const main = () => {
  //let arr = [7, 3, 12, 1, 5, 10, 23, 30, 6];
  let arr = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
  let s = new QuickSort();
  console.log(s.isSorted(arr));
  s.sort(arr);
  s.show(arr);
  console.log(s.isSorted(arr));
}

if (require.main === module) {
  main();
}

module.exports = QuickSort;

