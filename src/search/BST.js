'use strict';

class BST {
  constructor() {
    this.root = null;
  }

  get(key) {
    if (key === null)
      throw new Error('first argument to get() is null')
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

  put(key, val) {
    if (key === null)
      throw new Error('first argument to put() is null')
        // if (val === null) {
        //   this.delete(key);
        //   return;
        // }
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
}

class Node {
  constructor(key, val, N) {
    this.key = key || null;
    this.val = val || null;
    this.N = N || 0;
    this.left = null;
    this.right = null;
  }
}

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

console.log(b.min());
console.log(b.max());
console.log(b.floor('g'));
console.log(b.ceiling('g'));
console.log(b);
