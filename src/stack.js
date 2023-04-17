const { NotImplementedError } = require('../extensions/index.js');

class Stack {
  constructor() {
    this.arr = [];
  }
  push(element) {
    return this.arr.push(element); //добавляем в конец arr
  }

  pop() {
    return this.arr.pop(); //убираем с конца arr
  }

  peek() {
    return this.arr[this.arr.length - 1]; //возвращаем последний элемент
  }
}

module.exports = {
  Stack
};
