import { listWrapper } from './elements.js';
import { listItemHandler } from './handlers.js';
import { checkItemHandler } from './list-remove-handlers.js';

export default function renderList(data) {
  let listItemHtml = '';
  data.forEach((item) => {
    listItemHtml
    += `
      <li class="list-item">
        <input type="checkbox" id="list-check" class="list-check" ${item.completed ? 'checked' : ''}/>
        <span class="item-text ${item.completed ? 'strike-through' : ''}">${item.description}</span>
        <div class="options">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <input type="hidden" value=${item.id} id="index" />
      </li>
    `;
  });

  listWrapper.innerHTML = listItemHtml;

  document.querySelectorAll('.list-item').forEach((item) => {
    const check = item.querySelector('#list-check');
    check.addEventListener('change', checkItemHandler);

    const options = item.querySelector('.options');
    options.addEventListener('click', listItemHandler);
  });
}