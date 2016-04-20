'use strict';

const RED = true;
const BLACK = false;

// 红黑查找树
class RedBlackBST {
  constructor() {
    this.root = null;
  }

  _isRed(node) {
    if (node === null) return false;
    return node.color === RED;
  }

  //  左旋转
  _rotateLeft(node) {
    let x = node.right;
    node.right = x.left;
    x.left = node;
    x.color = node.color;
    h.color = RED;
    x.N = node.N;
    node.N = this._size(node.left) + this._size(node.right) + 1;
  }

  // 右旋转
  _rotateRight(node) {
    let x = node.left;
    node.left = x.right;
    x.right = node;
    x.color = node.color;
    h.color = RED;
    x.N = node.N;
    node.N = this._size(node.left) + this._size(node.right) + 1;
  }

  // 颜色转换
  _flipColors(node) {
    node.color = RED;
    node.left.color = BLACK;
    node.right.color = BLACK;
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

  put(key, val) {

  }

  _put(node, key, val) {

  }

}

class Node {
  constructor(key, val, N， color) {
    this.key = key;
    this.val = val;
    this.N = N || 0;
    this.color = color // 其父结点指向它的链接的颜色
    this.left = null;
    this.right = null;
  }
}

module.exports = RedBlackBST;
