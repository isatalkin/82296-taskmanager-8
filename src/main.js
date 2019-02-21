'use strict';

/** Массив в объектами фильтров */
const filters = [
  {
    name: `all`,
    count: 15,
    checked: true,
    disabled: false
  },
  {
    name: `overdue`,
    count: 0,
    checked: false,
    disabled: true
  },
  {
    name: `today`,
    count: 0,
    checked: false,
    disabled: true
  },
  {
    name: `favorites`,
    count: 7,
    checked: false,
    disabled: false
  },
  {
    name: `repeating`,
    count: 2,
    checked: false,
    disabled: false
  },
  {
    name: `tags`,
    count: 6,
    checked: false,
    disabled: false
  },
  {
    name: `archive`,
    count: 115,
    checked: false,
    disabled: false
  }
];

/**
 * Создаёт шаблон фильтра.
 * @return {string} - Возвращает строку шаблона
 * @param {object} filter - Объект фильтра.
 */
const createFilterTemplate = (filter) => {
  return `<input
      type="radio"
      id="filter__${filter.name}"
      class="filter__input visually-hidden"
      name="filter"
      ${filter.checked ? `checked` : ``}
      ${filter.disabled ? `disabled` : ``}
    />
    <label for="filter__all" class="filter__label">
    ${filter.name} <span class="filter__all-count">${filter.count}</span></label>`;
};

/**
 * Функция рендера фильтров
 * @param {array} filtersArray - массив с фильтрами
 */
const renderFilters = (filtersArray) => {
  const mainFilter = document.querySelector(`.main__filter`);
  filtersArray.forEach(function (item) {
    mainFilter.innerHTML += createFilterTemplate(item);
  });
};

/** Редерит фильтры */
renderFilters(filters);
