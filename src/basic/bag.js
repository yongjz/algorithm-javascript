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
  var b = new Bag()
  console.log(b.size());
  console.log(b.isEmpty());
  b.add(11);
  console.log(b.size());
  console.log(b.isEmpty());

  b.add(22);
  console.log(b.size());
  console.log(b.isEmpty());

  b.add(33);
  console.log(b.size());
  console.log(b.isEmpty());

  console.log(b.first.item);
  console.log(b.first.next.item);
  console.log(b.first.next.next.item);
}

if (require.main === module) {
  main();
}

exports.Bag = Bag;