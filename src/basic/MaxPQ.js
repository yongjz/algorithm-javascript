'use strict';

class MaxPQ {
  constructor(maxN) {
    this.pq = new Array(maxN + 1);
    this.N = 0;
  }

  insert(item) {
    
  }

  max() {

  }

  delMax() {

  }

  isEmpty() {
    return this.N === 0;
  }

  size() {
    return this.N;
  }

  less(i, j) {
    return i < j;
  }

  exch(i, j) {
    let temp = this.pq[i];
    this.pq[i] = this.pq[j];
    this.pq[j] = temp;
  }

  swim(k) {
    while (k > 1 && less(Math.floor(k / 2), k)) {
      this.exch(Math.floor(k / 2), k);
      k = Math.floor(k / 2);
    }
  }

  sink(k) {
    
  }
}

module.exports = MaxPQ;