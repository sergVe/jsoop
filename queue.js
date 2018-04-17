'use strict';

class Queue {
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
   * Возвращает `true` если очередь пустая, в противном случае возвращается `false`
   * @returns {boolean}
   */
  get isEmpty() {
    return this.size === 0;
  }

  /**
   * Возвращает первый элемент
   * @returns {*}
   */
  get front() {
    if (this.isEmpty) {
      return null;
    }
    return this._items[0];
  }

  /**
   * Возвращает последний элемент
   * @returns {*}
   */
  get back() {
    if (this.isEmpty) {
      return null;
    }
    return this._items[this.size - 1];
  }

  /**
   * Добавляет элемент
   * @param {*} item
   */
  enqueue(item) {
    this._items.push(item);
  }

  /**
   * Удаляет последний элемент
   */
  dequeue () {
    this._items.pop();
  }
}