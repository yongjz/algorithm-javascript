'use strict';

//链表方式实现
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.N = 0;
  }

  //队尾入队
  enqueue(item) {
    var oldlast = this.last;
    this.last = new Node();
    this.last.item = item;
    this.last.next = null;
    if (this.isEmpty())
      this.first = this.last;
    else
      oldlast.next = this.last;
    this.N++;
  }


  //队首出队
  dequeue() {
    var item = this.first.item;
    this.first = this.first.next;
    if (this.isEmpty())
      last = null;
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
  var q = new Queue();

  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);

  for (var item of q) {
    console.log(item);
  }

  console.log('size = ' + q.size());
  console.log('出队' + q.dequeue());
  console.log('size = ' + q.size());
}

if (require.main === module) {
  main();
}

exports.Queue = Queue;