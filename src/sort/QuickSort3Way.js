'use strict';

const SortBase = require('./SortBase');

class QuickSort3Way extends SortBase {
  constructor() {
    super();
  }

  sort(arr) {
    this.shuffle(arr);
    this.quickSort3Way(arr, 0, arr.length - 1);
  }

  // 三向切分的快速排序
  quickSort3Way(arr, low, high) {
    if (high <= low) return;
    let lt = low, i = low + 1, gt = high;
    let v = arr[low];
    while (i <= gt) {
      if (arr[i] < v)
        this.exch(arr, lt++, i++);
      else if (arr[i] > v)
        this.exch(arr, i, gt--);
      else
        i++;
    }
    this.quickSort3Way(arr, low, lt - 1);
    this.quickSort3Way(arr, gt + 1, high);
  }
}

const main = () => {
  //let arr = [7, 3, 12, 1, 5, 10, 23, 30, 6];
  let arr = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
  let s = new QuickSort3Way();
  console.log(s.isSorted(arr));
  s.sort(arr);
  s.show(arr);
  console.log(s.isSorted(arr));
}

if (require.main === module) {
  main();
}

module.exports = QuickSort3Way;

