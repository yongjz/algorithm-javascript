'use strict';

class MaxPQ {
  constructor(maxN) {
    this.pq = new Array(maxN + 1);
    this.N = 0;
  }

  insert(item) {
    this.pq[++this.N] = item;
    this.swim(this.N);
  }

  max() {
    return this.pq[1];
  }

  delMax() {
    const max = this.pq[1];
    this.exch(1, this.N--);
    this.pq[this.N + 1] = null;
    this.sink(1);
    return max;
  }

  isEmpty() {
    return this.N === 0;
  }

  size() {
    return this.N;
  }

  less(i, j) {
    return this.pq[i] < this.pq[j];
  }

  exch(i, j) {
    let temp = this.pq[i];
    this.pq[i] = this.pq[j];
    this.pq[j] = temp;
  }

  swim(k) {
    while (k > 1 && this.less(Math.floor(k / 2), k)) {
      this.exch(Math.floor(k / 2), k);
      k = Math.floor(k / 2);
    }
  }

  sink(k) {
    while (2 * k <= this.N) {
      let j = 2 * k;
      if(j < this.N && this.less(j, j+1)) j++;
      if(!this.less(k, j)) break;
      this.exch(k, j);
      k = j;
    }
  }
}

const main = () => {
  var m = new MaxPQ(0);
  m.insert(10);
  m.insert(8);
  m.insert(9);
  m.insert(15);
  m.insert(6);
  m.insert(20);
  m.insert(1);
  m.insert(3);
  m.insert(30);
  m.insert(33);
  console.log(m.pq);

  for(let i = 0;i < 8; i++) {
    console.log(m.delMax());
  }
}

if (require.main === module) {
  main();
}

module.exports = MaxPQ;