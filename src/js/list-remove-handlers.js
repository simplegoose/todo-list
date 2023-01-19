import { getFromLocalStorage, saveToLocalStorage } from './updateMethods.js';

export function checkItemHandler(e) {
  const id = this.parentNode.querySelector('#index').value;
  const globalData = getFromLocalStorage();
  const data = globalData.find((item) => item.id === Number(id));

  if (e.target.checked) {
    this.parentNode.classList.toggle('strike-through');
    data.completed = true;
  } else {
    this.parentNode.classList.remove('strike-through');
    data.completed = false;
  }

  saveToLocalStorage(globalData);
}

export function clearListHandler() {
  const data = getFromLocalStorage().filter((item) => !item.completed);
  data.forEach((item, index) => {
    item.id = index + 1;
  });
  saveToLocalStorage(data);
}