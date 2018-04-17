'use strict';

class Stack {
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
   * Возвращает `true` если стек пустой, в противном случае возвращается `false`
   * @returns {boolean}
   */
  get isEmpty() {}

  /**
   * Добавляет элемент
   * @param {*} item
   */
  push() {}

  /**
   * Удаляет и возвращает последний элемент
   * @returns {*}
   */
  pop() {}

  /**
   * Возвращает последний элемент
   * @returns {*}
   */
  peek() {}
}