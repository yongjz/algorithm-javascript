'use strict';

class SortBase {
  constructor() {

  }

  less(v, w) {
    return v < w;
  }

  exch(arr, i, j) {
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }

  isSorted(arr) {
    for (let i = 1; i < arr.length; i++)
      if (this.less(arr[i], arr[i - 1]))
        return false;
    return true;
  }
  
  show(arr) {
    console.log(arr.toString());
  }
  
    // 随机打乱数组的顺序
  shuffle(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      let r = this.getRandomInt(i, n - 1);
      this.exch(arr, i, r);
    }
  }
  
  // 返回一个介于min和max之间的整型随机数
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // 取中位数，将中位数置于数组第一个位置
  median(arr, low, high) {
    const mid = low + Math.floor((high - low) / 2);
    if(arr[low] > arr[high])
      this.exch(arr, low, high);
    if(arr[mid] > arr[high])
      this.exch(arr, mid, high);
    if(arr[low] < arr[mid])
      this.exch(arr, low, mid);
  }
}

module.exports = SortBase;