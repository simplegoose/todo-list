import renderList from '../src/js/renderMethod.js';
import { getFromLocalStorage, saveToLocalStorage } from '../src/js/updateMethods.js';
import { removeItem } from '../src/js/handlers.js';

/** * @jest-environment jsdom */
describe('todo items test', () => {
  test('Add one new item to the list', () => {
    document.body.innerHTML = '<div>'
    + '  <ul class="todo-list"><li></li></ul>'
    + '</div>';

    const data = getFromLocalStorage();
    data.push({ completed: false, description: 'desc', id: data.length + 1 });
    saveToLocalStorage(data);
    renderList(getFromLocalStorage());
    const list = document.querySelectorAll('.todo-list li'); expect(list).toHaveLength(1);
  });

  test('Delete one new item in the list', () => {
    removeItem(1);
    const data = getFromLocalStorage();
    expect(data).toHaveLength(0);
  });
});