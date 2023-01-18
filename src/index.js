import './css/index.css';
import refreshIcon from './assets/vectors/refresh.svg';
import enterIcon from './assets/vectors/enter.svg';
import { enterWrapper, refreshWrapper } from './js/elements.js';
import { addEventListeners } from './js/eventListeners.js';

enterWrapper.src = enterIcon;
refreshWrapper.src = refreshIcon;

addEventListeners();