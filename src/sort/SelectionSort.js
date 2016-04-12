'use strict';

const SortBase = require('./SortBase');

class SelectionSort extends SortBase {
  constructor() {
    super();
  }

  sort(arr) {
    const N = arr.length;
    for (let i = 0; i < N; i++) {
      let min = i;
      for (let j = i + 1; j < N; j++)
        if (this.less(arr[j], arr[min]))
          min = j;
      this.exch(arr, i, min);
    }
  }
}

const main = () => {
  // let arr = [7, 3, 12, 1, 5, 10, 23, 30, 6];
  let arr = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
  let s = new SelectionSort();
  console.log(s.isSorted(arr));
  s.sort(arr);
  s.show(arr);
  console.log(s.isSorted(arr));
}

if (require.main === module) {
  main();
}

module.exports = SelectionSort;