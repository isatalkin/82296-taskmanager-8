import {makeFilterMarkup} from './make-filter';
import {makeCardMarkup} from './make-card';

/**
 * Перечисление используемых констант.
 * @readonly
 * @enum {number}
 */
const Numbers = {
  /** Максимальное кол-во задач в фильтре. */
  MAX_RANDOM_COUNT: 100,
  /** Максимальное кол-во карточек для отрисовки на доске при переключении фильтров. */
  MAX_RANDOM_CARDS: 10,
  /** Кол-во карточек для изначальной отрисовки на доске */
  DEFAULT_CARDS: 7
};

/**
 * Массив с цветами карточек
 * @constant
 * @type {array}
*/
const CARD_COLORS = [`black`, `blue`, `yellow`, `pink`];

/**
 * Массив с именами фильтров
 * @constant
 * @type {array}
*/
const FILTER_NAMES = [`all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`];

/** Генератор случайного числа
 * @param {number} max - максимум случайного числа
 * @return {number}- возвращает случайное число
 * */
const getRandomNumber = (max) => Math.floor(Math.random() * max);


/** Функция рендера карточек-задач
 * @param {number} number - Кол-во карточек для рендера
 */
const renderCards = (number) => {
  for (let i = 0; i < number; i++) {
    cardBoard.insertAdjacentHTML(`beforeend`, makeCardMarkup(CARD_COLORS[getRandomNumber(CARD_COLORS.length - 1)]));
  }
};

/** Удаляет все карточки с кардборда */
const cardBoard = document.querySelector(`.board__tasks`);
const clearCardBoard = () => {
  while (cardBoard.lastElementChild) {
    cardBoard.removeChild(cardBoard.lastElementChild);
  }
};

/**
 * Функция рендера фильтров
 * @param {array} array - массив с именами фильтров
 */
const renderFilters = (array) => {
  const mainFilter = document.querySelector(`.main__filter`);
  array.forEach(function (name) {
    mainFilter.insertAdjacentHTML(`beforeend`, makeFilterMarkup(name, getRandomNumber(Numbers.MAX_RANDOM_COUNT)));
  });
};

/** Переключение фильтра в состояние checked
 * @param {object} evt - ивент клика мышкой
 */
const toggleFilter = (evt) => {
  const mainFilter = document.querySelector(`.main__filter`);
  mainFilter.querySelector(`input[type="radio"]:checked`).checked = false;
  evt.target.checked = true;
};

renderFilters(FILTER_NAMES);

renderCards(Numbers.DEFAULT_CARDS);

const filter = document.querySelector(`.main__filter`);
filter.onclick = (evt) => {
  if (evt.target.className === `filter__label` && !evt.target.previousElementSibling.disabled) {
    toggleFilter(evt);
    clearCardBoard();
    renderCards(getRandomNumber(Numbers.MAX_RANDOM_CARDS));
  }
};
