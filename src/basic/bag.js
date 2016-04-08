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
  
}

class Node {
  constructor(item, next) {
    this.item = item;
    this.next = next;
  }
}

//测试
const main = (argv) => {
  var bag = new bag()
  console.log(bag.size());
  console.log(bag.isEmpty());
  bag.add(11);
  console.log(bag.size());
  console.log(bag.isEmpty());

  bag.add(22);
  console.log(bag.size());
  console.log(bag.isEmpty());

  bag.add(33);
  console.log(bag.size());
  console.log(bag.isEmpty());

  console.log(bag.first.item);
  console.log(bag.first.next.item);
  console.log(bag.first.next.next.item);
}

if (require.main === module) {
  main();
}

exports.Bag = Bag;