'use strict';

class Queue {
  /**
   * Создает стек
   * @param {...*} [items] Элементы добавляемые в стек
   */
  constructor() {}

  /**
   * Возвращает количество элементов
   * @returns {number}
   */
  get size() {}

  /**
   * Возвращает `true` если очередь пустая, в противном случае возвращается `false`
   * @returns {boolean}
   */
  get isEmpty() {}

  /**
   * Возвращает первый элемент
   * @returns {*}
   */
  get front() {}

  /**
   * Возвращает последний элемент
   * @returns {*}
   */
  get back() {}

  /**
   * Добавляет элемент
   * @param {*} item
   */
  enqueue() {}

  /**
   * Удаляет последний элемент
   */
  dequeue () {}
}