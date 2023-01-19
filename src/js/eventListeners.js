import { clear, refreshWrapper, todoInput } from './elements.js';
import {
  listItemHandler,
  todoInputHandler,
} from './handlers.js';
import { checkItemHandler, clearListHandler } from './list-remove-handlers.js';
import renderList from './renderMethod.js';
import { getFromLocalStorage } from './updateMethods.js';

export function listItemEventListener() {
  document.querySelectorAll('.list-item').forEach((item) => {
    const check = item.querySelector('#list-check');
    check.addEventListener('change', (e) => {
      checkItemHandler(e);
      renderList(getFromLocalStorage());
    });

    const options = item.querySelector('.options');
    options.addEventListener('click', () => {
      listItemHandler();
      renderList(getFromLocalStorage());
    });
  });
}

export function addEventListeners() {
  todoInput.addEventListener('keydown', (e) => {
    todoInputHandler(e);
    renderList(getFromLocalStorage());
  });

  refreshWrapper.addEventListener('click', () => {
    renderList(getFromLocalStorage());
  });

  clear.addEventListener('click', () => {
    clearListHandler();
    renderList(getFromLocalStorage());
  });

  window.addEventListener('load', () => {
    renderList(getFromLocalStorage());
  });
}