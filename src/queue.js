const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (this.length === 0) {
      this.head = new ListNode (value); // если других узлов нет, то создаём новый узел и он становится head
    } else { //если др узлы есть, то идём в конец списка (пока есть next) и добавляем туда новое значение
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode (value);
    }
    this.length++; // при добавлении длина очереди увеличивается
  }

  dequeue() {
    if(this.length > 0) { //если очередь не пуста, то назначаем head-ом следующий за current-ом узел, а current удаляется и возвращается его значение
      let current = this.head;
      this.head = this.head.next;
      this.length--; // при удалении длина очереди уменьшается
      return current.value;
    }
  }
}

module.exports = {
  Queue
};
