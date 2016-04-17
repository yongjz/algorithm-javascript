'use strict';

class SymbolTable {
  constructor() {
    this.st = new Map();
  }
  
  put(key, val) {
    if (key === null)
      throw new Error('called put() with null key')
      
    if (val === null)
      this.st.remove(key);
    
    this.st.set(key, val);
  }
  
  get(key) {
    if (key === null)
      throw new Error('called get() with null key')
    return this.st.get(key);
  }
  
  delete(key) {
    if (key === null)
      throw new Error('called delete() with null key')
    this.st.delete(key);
  }
  
  contains(key) {
    return this.get(key) !== null;
  }
  
  isEmpty() {
    return this.size() === 0;
  }
  
  size() {
    return this.st.size;
  }

}

var st = new SymbolTable();

st.put('a',1);
st.put('b',2);
st.put('c',3);

console.log(st);