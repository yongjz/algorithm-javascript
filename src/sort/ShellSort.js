'use strict';

const SortBase = require('./SortBase');

class ShellSort extends SortBase {
  constructor() {
    super();
  }

  sort(arr) {
    const N = arr.length;
    let h = 1;
    while (h < N / 3)
      h = 3 * h + 1;
    while (h >= 1) {
      for (let i = h; i < N; i++) {
        for (let j = i; j >= h && this.less(arr[j], arr[j - h]); j -= h) {
          this.exch(arr, j, j - h);
        }
      }
      h = Math.floor(h / 3);
    }
  }
}

const main = () => {
  // let arr = [7, 3, 12, 1, 5, 10, 23, 30, 6];
  let arr = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
  let s = new ShellSort();
  console.log(s.isSorted(arr));
  s.sort(arr);
  s.show(arr);
  console.log(s.isSorted(arr));
}

if (require.main === module) {
  main();
}

module.exports = ShellSort;