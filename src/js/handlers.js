import { getFromLocalStorage, saveToLocalStorage } from './updateMethods.js';

export const removeItem = (id) => {
  const filtered = getFromLocalStorage().filter((item) => !(item.id === Number(id)));
  filtered.forEach((item, index) => {
    item.id = index + 1;
  });
  saveToLocalStorage(filtered);
};

export const editItem = (id, description) => {
  const globalData = getFromLocalStorage();
  const data = globalData.find((item) => item.id === Number(id));

  data.description = description;

  saveToLocalStorage(globalData);
};

export function listItemHandler() {
  const id = this.parentNode.querySelector('#index').value;
  const descriptionEl = this.parentNode.querySelector('.item-text');
  const options = this.parentNode.querySelector('.options');
  options.removeEventListener('click', listItemHandler);

  const description = descriptionEl.textContent;
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('type', 'button');
  deleteBtn.className = 'del-icon';
  deleteBtn.addEventListener('click', () => {
    removeItem(id);
    this.parentNode.remove();
  });

  options.innerHTML = '';
  options.appendChild(deleteBtn);

  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.className = 'todo-input';
  inputEl.value = description;
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      editItem(id, e.target.value);

      const span = document.createElement('span');
      span.textContent = e.target.value;
      span.className = 'item-text';
      inputEl.remove();
      this.parentNode.insertBefore(span, options);
      this.parentNode.classList.remove('bg-yellow');

      e.target.value = '';
      e.target.blur();
    }
  });

  descriptionEl.remove();
  this.parentNode.insertBefore(inputEl, options);
  inputEl.focus();

  this.parentNode.classList.add('bg-yellow');
}

export function todoInputHandler(e) {
  if (e.keyCode === 13) {
    const description = e.target.value;
    const globalData = getFromLocalStorage();
    const arrLength = globalData.length;

    const data = {
      completed: false,
      description,
      id: arrLength + 1,
    };

    globalData.push(data);

    saveToLocalStorage(globalData);

    e.target.value = '';
    e.target.blur();
    document.querySelectorAll('.list-item').forEach((item) => {
      const options = item.querySelector('.options');
      options.addEventListener('click', listItemHandler);
    });
  }
}
