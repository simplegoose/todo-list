import { listWrapper } from './elements.js';

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
      </li>
    `;
  });

  listWrapper.innerHTML = listItemHtml;
}