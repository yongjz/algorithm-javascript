'use strict';

class Bag {
  constructor(first, N) {
    this.first = first || null;
    this.N = N || 0;
  }

  isEmpty() {
    return this.first === null;
  }
  
  size() {
    return this.N;
  }
  
  add(item) {
    var oldfirst = this.first;
    this.first = new Node();
    this.first.item = item;
    this.first.next = oldfirst;
    this.N++;
  }
  
  //遍历器对象
  [Symbol.iterator]() {
    var iterator = {
      next: next
    };
    // 不能直接操作this,否则遍历之后数据被清空,
    // 正确做法将要遍历的对象进行拷贝之后再进行遍历
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

//测试
const main = (argv) => {
  var bag = new Bag();
  bag.add(11);
  bag.add([9,8,7]);
  bag.add(22);
  bag.add({a:213});
  bag.add(33);
  for (var item of bag){
    console.log(item);
  }
  console.log(bag.first);
}

if (require.main === module) {
  main();
}

exports.Bag = Bag;