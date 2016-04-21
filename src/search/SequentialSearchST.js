'use strict';

class SequentialSearchST {
  constructor() {
    this.first = null;
    this.N = 0;
  }

  get(key) {
    for (let x = this.first; x != null; x = x.next) {
      if (key === x.key)
        return x.val
    }
    return null;
  }

  put(key, val) {
    for (let x = this.first; x != null; x = x.next) {
      if (key === x.key) {
        x.val = val;
        return;
      }
    }
    // 将新结点插入链表开头
    this.first = new Node(key, val, this.first);
    this.N++;
  }

  delete(key) {
    this.first = this._delete(this.first, key);
  }

  _delete(node, key) {
    if (node === null) return null;
    if (key === node.key) {
      this.N--;
      return node.next;
    }
    node.next = this._delete(node.next, key);
    return node;
  }

  delete_(key) {
    if (this.first.key === key) {
      this.N--;
      this.first = this.first.next;
    } else {
      let x = this.first;
      while (x !== null) {
        if (x.next !== null && x.next.key === key) {
          x.next = x.next.next;
          this.N--;
          return;
        }
        x = x.next;
      }
    }
  }

  size() {
    return N;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

class Node {
  constructor(key, val, next) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}

const main = () => {
  var s = new SequentialSearchST();
  s.put('s', 0);
  s.put('e', 1);
  s.put('a', 2);
  s.put('r', 3);
  s.put('c', 4);
  s.put('h', 5);

  s.delete('h');
  // s.delete('c');
  console.log(s);
}

if (require.main === module) {
  main();
}

module.exports = SequentialSearchST;
