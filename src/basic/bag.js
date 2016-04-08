'use strict';

class Bag {
  
  constructor(first, N) {
    this.first = first;
    this.N = N;
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

exports.Bag = Bag;