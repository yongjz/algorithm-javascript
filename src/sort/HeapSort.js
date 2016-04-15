'use strict';

class HeapSort {
  constructor() {

  }

  less(arr, i, j) {
    return arr[i - 1] < arr[j - 1];
  }

  exch(arr, i, j) {
    let temp = arr[i - 1];
    arr[i - 1] = arr[j - 1];
    arr[j - 1] = temp;
  }

  isSorted(arr) {
    for (let i = 1; i < arr.length; i++)
      if (this.less(arr, i, i - 1))
        return false;
    return true;
  }

  show(arr) {
    console.log(arr.toString());
  }

  sink(arr, k, N) {
    while (2 * k <= N) {
      let j = 2 * k;
      if (j < N && this.less(arr, j, j + 1)) j++;
      if (!this.less(arr, k, j)) break;
      this.exch(arr, k, j);
      k = j;
    }
  }

  sort(arr) {
    let N = arr.length;
    // 构造堆结构
    for (let k = Math.floor(N / 2); k >= 1; k--) {
      this.sink(arr, k, N);
    }
    // 将最大元素arr[1]和尾部元素arr[N]交换，然后修复堆
    while (N > 1) {
      this.exch(arr, 1, N--);
      this.sink(arr, 1, N);
    }
  }
}

const main = () => {
  // let arr = [7, 3, 12, 1, 5, 10, 23, 30, 6];
  let arr = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
  let s = new HeapSort();
  console.log(s.isSorted(arr));
  s.sort(arr);
  s.show(arr);
  console.log(s.isSorted(arr));
}

if (require.main === module) {
  main();
}

module.exports = HeapSort;
