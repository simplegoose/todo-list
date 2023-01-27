import { editItem } from '../src/js/handlers.js';
import { updateCompleted } from '../src/js/list-remove-handlers.js';
import { getFromLocalStorage, saveToLocalStorage } from '../src/js/updateMethods.js';

/** * @jest-environment jsdom */
describe('Edit and clear functions', () => {
  test('should edit the object containing the description', () => {
    const todos = [];
    const todo = {
      completed: false,
      description: 'Add to do',
      id: 1,
    };

    todos.push(todo);

    saveToLocalStorage(todos);

    editItem(1, 'Edit to do');

    expect(getFromLocalStorage()[0].description).toBe('Edit to do');
  });

  test('should update the object with completed to equal true', () => {
    const todos = [];
    const todo = {
      completed: false,
      description: 'Add to do',
      id: 1,
    };

    todos.push(todo);

    saveToLocalStorage(todos);

    updateCompleted(1, true);

    expect(getFromLocalStorage()[0].completed).toBe(true);
  });

  test('should clear the todos from storage', () => {
    const todos = [];
    const todo = {
      completed: false,
      description: 'Add to do',
      id: 1,
    };
    todos.push(todo);
    saveToLocalStorage(todos);
    updateCompleted(1, true);
    clearListHandler();
    expect(getFromLocalStorage()).toHaveLength(0);
  });
});