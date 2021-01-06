/* 
problem - its not constant time 
        - can result in clustering
        - hash function work well with prime numbers, they help spreading out the keys more uniformly
*/
var hash01 = (key, arrayLen) => {
  let total = 0;
  let prime_factor = 31;
  for (let char of key) {
    let val = char.charCodeAt(0) - 96;
    total = (total + prime_factor + val) % arrayLen;
  }
  return total;
};

// this is just a model of a HashTable

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime_factor = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let val = char.charCodeAt(0) - 96;
      total = (total + prime_factor + val) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (this.keyMap[index]) this.keyMap[index].push([key, value]);
    else {
      this.keyMap[index] = [].push([key, value]);
    }
  }

  get(key) {
    let index = this._hash(key);

    let arr = this.keyMap[index];
    if (arr) {
      for (let i = 0; i < arr.length; i++) {
        let cur = arr[i];
        if (cur[0] === key) return cur[1];
      }
      return null;
    }
    return null;
  }

  keys() {
    let res = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      let cur = this.keyMap[i];
      if (cur && cur.length > 0) {
        for (let j = 0; j < cur.length; j++) {
          res.push(cur[j][0]);
        }
      }
    }
    return res;
  }

  values() {
    let set = new Set();
    for (let i = 0; i < this.keyMap.length; i++) {
      let cur = this.keyMap[i];
      if (cur && cur.length > 0) {
        for (let j = 0; j < cur.length; j++) {
          set.add(cur[j][1]);
        }
      }
    }
    return Array.from(set);
  }
}
