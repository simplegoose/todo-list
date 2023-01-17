import './css/index.css';
import refreshIcon from './assets/vectors/refresh.svg';
import enterIcon from './assets/vectors/enter.svg';
import { enterWrapper, refreshWrapper } from './js/elements.js';
import renderList from './js/renderMethod.js';

enterWrapper.src = enterIcon;
refreshWrapper.src = refreshIcon;

const data = [
  {
    completed: true,
    description: 'Visit the shop',
    id: 3,
  },
  {
    completed: false,
    description: 'Visit the dentist',
    id: 3,
  },
  {
    completed: false,
    description: 'Finish setting up Ruby app',
    id: 3,
  },
];

renderList(data);