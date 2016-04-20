'use strict';
const Queue = require('../basic/Queue');

// 二叉查找树
class BST {
  constructor() {
    this.root = null;
  }

  // 获取结点
  get(key) {
    if (key === null)
      throw new Error('first argument to get() is null');
    return this._get(this.root, key);
  }

  _get(node, key) {
    if (node === null)
      return null;
    if (key < node.key)
      return this._get(node.left, key);
    else if (key > node.key)
      return this._get(node.right, key);
    else return node.val;
  }

  // 添加新结点
  put(key, val) {
    if (key === null)
      throw new Error('first argument to put() is null');
    if (val === null) {
      this.delete(key);
      return;
    }
    this.root = this._put(this.root, key, val);
  }

  _put(node, key, val) {
    if (node === null) {
      return new Node(key, val, 1);
    }
    if (key < node.key)
      node.left = this._put(node.left, key, val);
    else if (key > node.key)
      node.right = this._put(node.right, key, val);
    else
      node.val = val;
    node.N = this._size(node.left) + this._size(node.right) + 1;
    return node;
  }

  // 结点数量
  size() {
    this._size(this.root)
  }

  _size(node) {
    if (node === null)
      return 0;
    else
      return node.N;
  }

  // 最小键
  min() {
    return this._min(this.root).key;
  }

  _min(node) {
    if (node.left === null) return node;
    return this._min(node.left);
  }

  // 最大键
  max() {
    return this._max(this.root).key;
  }

  _max(node) {
    if (node.right === null) return node;
    return this._max(node.right);
  }

  // 向下取整
  floor(key) {
    let node = this._floor(this.root, key);
    if (node === null) return null;
    return node.key;
  }

  _floor(node, key) {
    if (node === null) return null;
    if (key === node.key)
      return node;
    if (key < node.key)
      return this._floor(node.left, key);
    let t = this._floor(node.right, key);
    if (t !== null) return t;
    else return node;
  }

  // 向上取整
  ceiling(key) {
    let node = this._ceiling(this.root, key);
    if (node === null) return null;
    return node.key;
  }

  _ceiling(node, key) {
    if (node === null) return null;
    if (key === node.key)
      return key;
    if (key > node.key)
      return this._ceiling(node.right, key);
    let t = this._ceiling(node.left, key);
    if (t !== null) return t;
    else return node;
  }

  // 查找排名为k的键
  select(k) {
    if (k < 0 || k >= this.size())
      throw new Error();
    return this._select(this.root, k).key;
  }

  _select(node, k) {
    if (node === null) return null;
    let t = this._size(node.left);
    if (t > k) {
      return this._select(node.left, k);
    } else if (t < k) {
      return this._select(node.right, k - t - 1);
    } else {
      return node;
    }
  }

  // 排名, 小于给定key的数量
  rank(key) {
    return this._rank(this.root, key);
  }

  _rank(node, key) {
    if (node === null) return 0;
    if (key < node.key)
      return this._rank(node.left, key);
    else if (key > node.key)
      return this._rank(node.right, key) + this._size(node.left) + 1;
    else
      return this._size(node.left);
  }

  // 删除最小键
  deleteMin() {
    this.root = this._deleteMin(this.root);
  }

  _deleteMin(node) {
    if (node.left === null) return node.right;
    node.left = this._deleteMin(node.left);
    node.N = this._size(node.left) + this._size(node.right) + 1;
    return node;
  }

  // 删除最大键
  deleteMax() {
    this._deleteMax(this.root);
  }

  _deleteMax(node) {
    if (node.right === null) return node.left;
    node.right = this._deleteMax(node.right);
    node.N = this._size(node.left) + this._size(node.right) + 1;
    return node;
  }

  // 删除结点
  delete(key) {
    this.root = this._delete(this.root, key);
  }

  _delete(node, key) {
    if (node === null) return null;
    if (key < node.key)
      node.left = this._delete(node.left, key);
    else if (key > node.key)
      node.right = this._delete(node.right, key);
    else {
      if (node.right === null) return node.left;
      if (node.left === null) return node.right;
      let tmp = node;
      node = this._min(node.right);
      node.right = this._deleteMin(tmp.right);
      node.left = tmp.left;
    }
    node.N = this._size(node.left) + this._size(node.right) + 1;
    return node;
  }

  // 中序遍历结点
  print() {
    this._print(this.root);
  }

  _print(node) {
    if (node === null) return;
    this._print(node.left);
    console.log(node.key);
    this._print(node.right);
  }

  // 遍历所有结点
  keys() {
    console.log(this.min());
    console.log(this.max());
    return this.range(this.min(), this.max());
  }

  // 给定范围遍历结点
  range(low, high) {
    let q = new Queue();
    this._range(this.root, q, low, high);
    return q;
  }

  _range(node, queue, low, high) {
    if (node === null) return;
    if (low < node.key)
      this._range(node.left, queue, low, high);
    if (low <= node.key && high >= node.key)
      queue.enqueue(node.key);
    if (high > node.key)
      this._range(node.right, queue, low, high);
  }
}

class Node {
  constructor(key, val, N) {
    this.key = key;
    this.val = val;
    this.N = N || 0;
    this.left = null;
    this.right = null;
  }
}

const main = () => {
  var b = new BST();

  b.put('s', 0);
  b.put('e', 1);
  b.put('a', 2);
  b.put('r', 3);
  b.put('c', 4);
  b.put('h', 5);
  b.put('e', 6);
  b.put('x', 7);
  b.put('a', 8);
  b.put('m', 9);
  b.put('p', 10);
  b.put('l', 11);
  b.put('e', 12);
  b.put('y', 12);

  console.log(b.min());
  console.log(b.max());
  console.log(b.floor('g'));
  console.log(b.ceiling('g'));
  console.log(b.select(3));
  b.deleteMin();
  console.log(b.rank('b'));
  b.deleteMax();
  b.delete('e');
  console.log(b);
  b.print();
  console.log(b.keys());
  console.log(b.range('f', 't'));
}

if (require.main === module) {
  main();
}

module.exports = BST;
