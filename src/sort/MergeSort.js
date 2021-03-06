'use strict';

const SortBase = require('./SortBase');

class MergeSort extends SortBase {
  constructor() {
    super();
    this.aux = [];
  }

  //归并方法
  merge(arr, low, mid, high) {
    let i = low, j = mid + 1;
    for (let k = low; k <= high; k++)
      this.aux[k] = arr[k];

    for (let k = low; k <= high; k++) {
      if (i > mid)
        arr[k] = this.aux[j++];
      else if (j > high)
        arr[k] = this.aux[i++];
      else if (this.less(this.aux[i], this.aux[j]))
        arr[k] = this.aux[i++];
      else
        arr[k] = this.aux[j++];
    }
  }

  // 使用递归, 自顶向下排序
  sort(arr) {
    this.aux = new Array(arr.length);
    this.mergeSort(arr, 0, arr.length - 1);
  }

  mergeSort(arr, low, high) {
    if (high <= low)
      return;
    let mid = low + Math.floor((high - low) / 2);
    this.mergeSort(arr, low, mid);
    this.mergeSort(arr, mid + 1, high);
    this.merge(arr, low, mid, high);
  }
}

const main = () => {
  //let arr = [7, 3, 12, 1, 5, 10, 23, 30, 6];
  let arr = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
  let s = new MergeSort();
  console.log(s.isSorted(arr));
  s.sort(arr);
  s.show(arr);
  console.log(s.isSorted(arr));
}

if (require.main === module) {
  main();
}

module.exports = MergeSort;

