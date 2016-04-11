'use strict';
const SortBase = require('./SortBase');

class SelectionSort extends SortBase {
  constructor() {
    // 子类必须在constructor方法中调用super方法，否则新建实例时会报错。
    // 这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。
    // 如果不调用super方法，子类就得不到this对象。
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