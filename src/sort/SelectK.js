'use strict';

const SortBase = require('./SortBase');

class selectK extends SortBase {
  constructor() {
    super();
  }

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

  select(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    while (high > low) {
      let j = this.partition(arr, low, high);
      if (j === k)
        return arr[k];
      else if (j > k)
        high = j - 1;
      else if (j < k)
        low = j + 1;
    }
    return arr[k];
  }
}

const main = () => {
  let s = new selectK();
  let arr = [7, 3, 12, 1, 5, 10, 23, 30, 6];
  // let arr = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
  const k = s.select(arr, 3);
  console.log(k);
}

if (require.main === module) {
  main();
}

module.exports = selectK;