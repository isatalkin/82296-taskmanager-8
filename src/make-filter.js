/**
 * Создаёт шаблон фильтра.
 * @param {string} filterName - Имя фильтра.
 * @param {number} filterCount - Кол-во фильтрующихся карточек.
 * @return {string} - Возвращает строку шаблона
 */
export const makeFilterMarkup = (filterName, filterCount) => {
  return `<input
      type="radio"
      id="filter__${filterName}"
      class="filter__input visually-hidden"
      name="filter"
      ${filterName === `all` ? `checked` : ``}
      ${filterCount === 0 ? `disabled` : ``}
    />
    <label for="filter__${filterName}" class="filter__label">
    ${filterName} <span class="filter__all-count">${filterCount}</span></label>`;
};
