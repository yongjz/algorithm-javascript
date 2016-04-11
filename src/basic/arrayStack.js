'use strict';

class ArrayStack {
  constructor() {
    this.arr = new Array();
    this.N = 0;
  }

  //进栈
  push(item) {
    if (this.N === this.arr.length) {
      this.resize(2 * this.arr.length);
    }
    this.arr[this.N++] = item;
  }

  //出栈
  pop() {
    var item = this.arr[--this.N];
    this.arr[this.N] = null;
    if (this.N > 0 && this.N === Math.floor(this.arr.length / 4))
      this.resize(Math.floor(this.arr.length / 2));
    return item;
  }

  resize(max) {
    var temp = new Array(max);
    for (var i = 0; i < this.N; i++) {
      temp[i] = this.arr[i];
    }
    this.arr = temp;
  }

  isEmpty() {
    return this.N === 0;
  }

  size() {
    return this.N;
  }

}

const main = () => {
  var s = new ArrayStack();
  s.push(1);
  s.push([5, 6, 7]);
  s.push({ a: 'hello' });

  console.log(s.pop());
  console.log(s.pop());
}

if (require.main === module) {
  main();
}

exports.ArrayStack = ArrayStack;