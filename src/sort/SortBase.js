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
}

module.exports = SortBase;