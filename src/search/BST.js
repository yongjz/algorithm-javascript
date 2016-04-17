'use strict';

class BST {
  constructor() {
    this.root = null;
  }
  
  size() {
    this.size(this.root)
  }
  
  size(node) {
    if(node === null) 
      return 0;
    else 
      return node.N;
  }
  
  get(key) {
    return this._get(this.root, key);
  }
  
  _get(node, key) {
    if(node === null)
      return null;
    if(key < node.key)
      return this._get(node.left, key);
    else if(key > node.key)
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
    if(node === null) {
      return new Node(key, val, 1);
    }
    if(key < node.key)
      node.left = this._put(node.left, key, val);
    else if(key > node.key)
      node.right = this._put(node.right, key, val);
    else
      node.val = val;
    node.N = this.size(node.left) + this.size(node.right) + 1;
    return node;
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

b.put('b', 2);
b.put('a', 1);
b.put('c', 3);
console.log(b.get('c'));
console.log(b);
