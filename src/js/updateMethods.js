/* eslint-disable import/no-cycle */
import renderList from './renderMethod.js';

/* eslint-disable import/no-mutable-exports */
export let data = [];

export function saveToLocalStorage(newData) {
  data = newData;

  if (window.localStorage) {
    localStorage.setItem('todo_data', JSON.stringify(data));
  }
}

export function getFromLocalStorage() {
  if (window.localStorage) {
    try {
      const parsed = JSON.parse(localStorage.getItem('todo_data'));
      data = parsed?.length ? parsed : [];
    } catch (error) {
      data = [];
    }

    renderList(data);
  }
}