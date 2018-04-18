'use strict';

class Set {
  /**
   * Создает сет, опционально принимая элементы для добавления
   * @param {...*} [items]
   */
  constructor(items=[]) {
    if (!items.length) {
      this._items = [];
    }
    else {
      let temp = [];
      [...items].forEach((item, i, arr) => {
        if (!temp.includes(item)) {
          temp.push(item);
        }
      });
      this._items = temp;
    }

  }

  /**
   * Возвращает размер сета
   */
  get size() {
    return this._items.length;
  }

  /**
   * Возвращает элементы сета
   */
  get values() {

    return this._items.map(item => [item, item]);
  }

  /**
   * Добавляет элемент в сет
   * @param {*} item
   */
  add(item) {
    if (this.has(item)) {
      return null;
    }
    this._items.push(item);
  }

  /**
   * Удаляет элемент из сета и возвращает `true` если элемент удален и `false` если нет
   * @param {*} item
   * @returns {boolean}
   */
  remove(item) {
    if (!this.has(item)) {
      return false;
    }
      this._items = this._items.filter(el => el !== item);
      return true;

  }

  /**
   * Проверяет наличие элемента в сете
   * @param {*} item
   * @returns {boolean}
   */
  has(item) {
    return this._items.includes(item);
  }

  /**
   * Очищает сет
   */
  clear() {
    this._items.length = 0;
  }

  /**
   * Возращает сет состоящий из элементов двух сетов
   * @param {Set} set
   * @returns {Set}
   */
  union(set) {
    if (set.size === 0) {
      return this;
    }
    const temp = set.values;
    temp.forEach(item => this.add(item[0]));
    return this;

  }

  /**
   * Возращает сет состоящий из элементов которые присутствуют в обоих сетах
   * @param {Set} set
   * @returns {Set}
   */
  intersection(set) {
    if (set.size === 0 || this.size === 0) {
      this._items = [];
      return this;
    }
    let result = [];
    const temp = set.values;
    temp.forEach(item => {
      if (this.has(item[0])) {
        result = result.concat(item[0]);
      }
    });
    this._items = result;
    return this;
  }

  /**
   * Возращает сет состоящий из элементов присутствующих в первом сете, и отсутствующих во втором
   * @param {Set} set
   * @returns {Set}
   */
  difference(set) {
    if (set.size === 0 || this.size === 0) {
      return this;
    }

    let result = [];
    this.values.forEach(item => {
      if (!set.has(item[0])) {
        result = result.concat(item[0])
      }
    });
    this._items = result;
    return this;
  }

  /**
   * Возвращает `true` если сет содержит в себе все элементы из друого сета
   * @param {Set} set
   * @returns {boolean}
   */
  isSubset(set) {
    if (set.size === 0 || this.size === 0) {
      return false;
    }
    return set.values.every(item => this.has(item[0]));
  }
}

