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
  [Symbol.iterator]() { return this; }
  
  next() {
    if(this.first !== null) {
      var value = this.first.item;
      this.first = this.first.next;
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
}

if (require.main === module) {
  main();
}

exports.Bag = Bag;