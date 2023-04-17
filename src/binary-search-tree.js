const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.base = null;
  }

  root() {
    return this.base;
  }

  add(data) {
    this.base = addData(this.base, data);
    function addData (node, data) {
      if (!node) { // если нет узла, то добавляем
        return new Node(data);
      }
      if (node.data === data) { // если есть узел, то возвращаем его
        return node;
      }
      if (data < node.data) {
        node.left = addData(node.left, data);  // если data меньше текущего узла, то добавляем влево
      } else {
        node.right = addData(node.right, data);  // если data больше текущего узла, то добавляем вправо
      }
      return node;
    }
  }


  has(data) {
    return searchData(this.base, data);

    function searchData(node, data) {
      if(!node) { // если узла не существует, то возвращаем false
        return false;
      }
      if(node.data === data) {
        return true; // если узел есть и его значение == искомому, то возвращаем true
      }
      if (data < node.data) {
        return searchData(node.left, data); // если data меньше значения текущего узла, то ищем слева
      } else {
        return searchData(node.right, data); // если data больше значения текущего узла, то ищем справа
      }
    }
  }

  find(data) {
    return findData(this.base, data);

    function findData(node, data) {
      if (!node) { // если узла не существует, то возвращаем null
        return null;
      }

      if (node.data === data) {
        return node; // если узел есть и его значение == искомому, то возвращаем узел
      }

      if (data < node.data) {
        return findData(node.left, data); // если data меньше значения текущего узла, то ищем слева
      } else {
        return findData(node.right, data); // если data больше значения текущего узла, то ищем справа
      }
    }
  }

  remove(data) {
    this.base = removeData(this.base, data);

    function removeData(node, data) {
      if (!node) { // если узла не существует, то возвращаем null
        return null;
      }

      if (data < node.data) { // если data меньше значения текущего узла, то идём влево и вызываем ф-цию там
        node.left = removeData(node.left, data);
        return node;
      } else if (data > node.data) { // если data больше значения текущего узла, то идём вправо и вызываем ф-цию там
        node.right = removeData(node.right, data);
        return node;
      }  else {
        if (!node.left && !node.right) { // если элемент - лист, то просто удаляем
          return null;
        }
        if (!node.left) { // если есть правый потомок, то вместо удаляемого элемента помещаем правое поддерево
          node = node.right;
          return node;
        }
        if (!node.right) { // если есть левый потомок, то вместо удаляемого элемента помещаем левое поддерево
          node = node.left;
          return node;
        }

        let minFromRight = node.right; // когда существуют оба потомка

        while (minFromRight.left) { // пока есть потомки ищем до min элемента и помещаем туда minFronRight.data
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeData(node.right, minFromRight.data); //обновляем правое поддерево

        return node; // возвращаем обновлённый узел
      }
    }
  }

  min() {
    if (!this.base) { // если нет корня, то нечего возвращать -> null
      return null;
    }

    let nodeMin = this.base; //переменная, кот ходит и ищет минимальный узел слева, начиная с вершины
    while(nodeMin.left) {
      nodeMin = nodeMin.left;
    }

    return nodeMin.data; // найден самый левый узел
  }

  max() {
    if (!this.base) { // если нет корня, то нечего возвращать -> null
      return null;
    }

    let nodeMax = this.base; //переменная, кот ходит и ищет мксимальный узел справа, начиная с вершины
    while(nodeMax.right) {
      nodeMax = nodeMax.right;
    }

    return nodeMax.data; // найден самый правый узел
  }
}

module.exports = {
  BinarySearchTree
};