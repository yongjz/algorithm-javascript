'use strict';

//链表方式实现
class Stack {
  constructor() {
    this.first = null;
    this.N = 0;
  }

  //进栈
  push(item) {
    var oldfirst = this.first;
    this.first = new Node();
    this.first.item = item;
    this.first.next = oldfirst;
    this.N++;
  }

  //出栈
  pop() {
    var item = this.first.item;
    this.first = this.first.next;
    this.N--;
    return item;
  }

  isEmpty() {
    return this.first === null;
  }

  size() {
    return this.N;
  }

  [Symbol.iterator]() {
    var iterator = {
      next: next
    };

    var current = this.first;

    function next() {
      if (current !== null) {
        var value = current.item;
        current = current.next;
        return {
          done: false,
          value: value
        }
      } else {
        return {
          done: true
        }
      }
    }

    return iterator;
  }
}

class Node {
  constructor(item, next) {
    this.item = item;
    this.next = next;
  }
}

const main = () => {
  var s = new Stack();
  s.push(1);
  s.push([5, 6, 7]);
  s.push({ a: 'hello' });

  for (var item of s) {
    console.log(item);
  }

  console.log(s.pop());
}
if (require.main === module) {
  main();
}

module.exports = Stack;
