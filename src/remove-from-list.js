const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

function removeKFromList(list, k) {
  if (!list) { //если нет списка, возвращаем null
    return null;
  }

  if (list.value === k) { //если значение списка == k, то...
    if (list.next) {
      return removeKFromList(list.next, k); //проверяем next
    } else {
      return null; //и у него нет next-а, то удаляем его и возвращаем null
    }
  } else {//если значение списка не равно k, то проверяем следующее
    list.next = removeKFromList(list.next, k);
    return list;
  }
}

module.exports = {
  removeKFromList
};
