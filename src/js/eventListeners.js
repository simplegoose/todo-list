import { clear, refreshWrapper, todoInput } from './elements.js';
import {
  listItemHandler,
  todoInputHandler,
} from './handlers.js';
import { checkItemHandler, clearListHandler } from './list-remove-handlers.js';
import { getFromLocalStorage } from './updateMethods.js';

export function listItemEventListener() {
  document.querySelectorAll('.list-item').forEach((item) => {
    const check = item.querySelector('#list-check');
    check.addEventListener('change', checkItemHandler);

    const options = item.querySelector('.options');
    options.addEventListener('click', listItemHandler);
  });
}

export function addEventListeners() {
  todoInput.addEventListener('keydown', todoInputHandler);

  refreshWrapper.addEventListener('click', getFromLocalStorage);

  clear.addEventListener('click', clearListHandler);

  window.addEventListener('load', getFromLocalStorage);
}