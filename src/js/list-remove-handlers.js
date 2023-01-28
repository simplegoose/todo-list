import { getFromLocalStorage, saveToLocalStorage } from './updateMethods.js';

export const updateCompleted = (id, isCompleted) => {
  const globalData = getFromLocalStorage();
  const data = globalData.find((item) => item.id === Number(id));

  data.completed = isCompleted;

  saveToLocalStorage(globalData);
};

export function checkItemHandler(e) {
  const id = this.parentNode.querySelector('#index').value;

  if (e.target.checked) {
    this.parentNode.classList.toggle('strike-through');
    updateCompleted(id, true);
  } else {
    this.parentNode.classList.remove('strike-through');
    updateCompleted(id, false);
  }
}

export function clearListHandler() {
  const data = getFromLocalStorage().filter((item) => !item.completed);
  data.forEach((item, index) => {
    item.id = index + 1;
  });
  saveToLocalStorage(data);
}