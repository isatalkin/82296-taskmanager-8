'use strict';

/** Максимальное кол-во задач в фильтре */
const MAX_FILTER__COUNT = 100;

/** Массив в именами фильтров */
const filterNames = [`all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`];

/** Генерирует рандомное число
 * @return {number}- возвращает случайное число
 * @param {number} max - максимум случайного числа
 * */
const getRandomNumber = (max) => Math.floor(Math.random() * max);

/**
 * Создаёт шаблон фильтра.
 * @return {string} - Возвращает строку шаблона
 * @param {string} filterName - Имя фильтра.
 */
const createFilterTemplate = (filterName) => {
  const randomFilterCount = getRandomNumber(MAX_FILTER__COUNT);
  return `<input
      type="radio"
      id="filter__${filterName}"
      class="filter__input visually-hidden"
      name="filter"
      ${filterName === `all` ? `checked` : ``}
      ${randomFilterCount === 0 ? `disabled` : ``}
    />
    <label for="filter__all" class="filter__label">
    ${filterName} <span class="filter__all-count">${randomFilterCount}</span></label>`;
};

/**
 * Функция рендера фильтров
 * @param {array} array - массив с именами фильтров
 */
const renderFilters = (array) => {
  const mainFilter = document.querySelector(`.main__filter`);
  array.forEach(function (name) {
    mainFilter.innerHTML += createFilterTemplate(name);
  });
};

/** Редерит фильтры */
renderFilters(filterNames);
