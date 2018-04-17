'use strict';

class Stack {
  /**
   * Создает стек
   * @param {...*} [items] Элементы добавляемые в стек
   */
  constructor() {
    this._items = [];
  }
  /**
   * Возвращает количество элементов
   * @returns {number}
   */
  get size() {
    return this._items.length;
  }

  /**
   * Возвращает `true` если стек пустой, в противном случае возвращается `false`
   * @returns {boolean}
   */
  get isEmpty() {
    return this.size === 0;
  }

  /**
   * Добавляет элемент
   * @param {*} item
   */
  push(item) {
    this._items.push(item);
  }

  /**
   * Удаляет и возвращает последний элемент
   * @returns {*}
   */
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this._items.pop();
  }

  /**
   * Возвращает последний элемент
   * @returns {*}
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this._items[this.size - 1];
  }
}