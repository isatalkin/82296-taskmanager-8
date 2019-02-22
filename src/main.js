'use strict';

/** Перечисление используемых констант
 * MAX_RANDOM_COUNT - максимальное кол-во задач в фильтре.
 * MAX_RANDOM_CARDS - максимальное кол-во карточек для отрисовки на доске при переключении фильтров.
 * DEFAULT_CARDS - кол-во карточек для изначальной отрисовки на доске
 */
const Numbers = {
  MAX_RANDOM_COUNT: 100,
  MAX_RANDOM_CARDS: 10,
  DEFAULT_CARDS: 7
};

/** Массив в именами фильтров */
const filterNames = [`all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`];

/** Массив с цветами карточек */
const cardColors = [`black`, `blue`, `yellow`, `pink`];

/** Генератор случайного числа
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
  const randomFilterCount = getRandomNumber(Numbers.MAX_RANDOM_COUNT);
  return `<input
      type="radio"
      id="filter__${filterName}"
      class="filter__input visually-hidden"
      name="filter"
      ${filterName === `all` ? `checked` : ``}
      ${randomFilterCount === 0 ? `disabled` : ``}
    />
    <label for="filter__${filterName}" class="filter__label">
    ${filterName} <span class="filter__all-count">${randomFilterCount}</span></label>`;
};

/**
 * Функция рендера фильтров
 * @param {array} array - массив с именами фильтров
 */
const renderFilters = (array) => {
  const mainFilter = document.querySelector(`.main__filter`);
  array.forEach(function (name) {
    mainFilter.insertAdjacentHTML(`beforeend`, createFilterTemplate(name));
  });
};

/** Редерит фильтры */
renderFilters(filterNames);

/**
 * Создает шаблон карточки-задачи
 * @return {string}
 */
const createCardMarkup = () => {
  return `<article class="card card--${cardColors[getRandomNumber(cardColors.length - 1)]}">
  <form class="card__form" method="get">
    <div class="card__inner">
      <div class="card__control">
        <button type="button" class="card__btn card__btn--edit">
          edit
        </button>
        <button type="button" class="card__btn card__btn--archive">
          archive
        </button>
        <button
          type="button"
          class="card__btn card__btn--favorites card__btn--disabled"
        >
          favorites
        </button>
      </div>

      <div class="card__color-bar">
        <svg class="card__color-bar-wave" width="100%" height="10">
          <use xlink:href="#wave"></use>
        </svg>
      </div>

      <div class="card__textarea-wrap">
        <label>
          <textarea
            class="card__text"
            placeholder="Start typing your text here..."
            name="text"
          ></textarea>
        </label>
      </div>

      <div class="card__settings">
        <div class="card__details">
          <div class="card__dates">
            <button class="card__date-deadline-toggle" type="button">
              date: <span class="card__date-status">no</span>
            </button>

            <fieldset class="card__date-deadline">
              <label class="card__input-deadline-wrap">
                <input
                  class="card__date"
                  type="text"
                  placeholder="23 September"
                  name="date"
                  value="23 September"
                />
              </label>
              <label class="card__input-deadline-wrap">
                <input
                  class="card__time"
                  type="text"
                  placeholder="11:15 PM"
                  name="time"
                  value="11:15 PM"
                />
              </label>
            </fieldset>

            <button class="card__repeat-toggle" type="button">
              repeat:<span class="card__repeat-status">no</span>
            </button>

            <fieldset class="card__repeat-days">
              <div class="card__repeat-days-inner">
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-mo-6"
                  name="repeat"
                  value="mo"
                />
                <label class="card__repeat-day" for="repeat-mo-6"
                  >mo</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-tu-6"
                  name="repeat"
                  value="tu"
                  checked
                />
                <label class="card__repeat-day" for="repeat-tu-6"
                  >tu</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-we-6"
                  name="repeat"
                  value="we"
                />
                <label class="card__repeat-day" for="repeat-we-6"
                  >we</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-th-6"
                  name="repeat"
                  value="th"
                />
                <label class="card__repeat-day" for="repeat-th-6"
                  >th</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-fr-6"
                  name="repeat"
                  value="fr"
                  checked
                />
                <label class="card__repeat-day" for="repeat-fr-6"
                  >fr</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  name="repeat"
                  value="sa"
                  id="repeat-sa-6"
                />
                <label class="card__repeat-day" for="repeat-sa-6"
                  >sa</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-su-6"
                  name="repeat"
                  value="su"
                  checked
                />
                <label class="card__repeat-day" for="repeat-su-6"
                  >su</label
                >
              </div>
            </fieldset>
          </div>

          <div class="card__hashtag">
            <div class="card__hashtag-list">
              <span class="card__hashtag-inner">
                <input
                  type="hidden"
                  name="hashtag"
                  value="repeat"
                  class="card__hashtag-hidden-input"
                />
                <button type="button" class="card__hashtag-name">
                  #repeat
                </button>
                <button type="button" class="card__hashtag-delete">
                  delete
                </button>
              </span>

              <span class="card__hashtag-inner">
                <input
                  type="hidden"
                  name="hashtag"
                  value="repeat"
                  class="card__hashtag-hidden-input"
                />
                <button type="button" class="card__hashtag-name">
                  #cinema
                </button>
                <button type="button" class="card__hashtag-delete">
                  delete
                </button>
              </span>

              <span class="card__hashtag-inner">
                <input
                  type="hidden"
                  name="hashtag"
                  value="repeat"
                  class="card__hashtag-hidden-input"
                />
                <button type="button" class="card__hashtag-name">
                  #entertaiment
                </button>
                <button type="button" class="card__hashtag-delete">
                  delete
                </button>
              </span>
            </div>

            <label>
              <input
                type="text"
                class="card__hashtag-input"
                name="hashtag-input"
                placeholder="Type new hashtag here"
              />
            </label>
          </div>
        </div>

        <label class="card__img-wrap">
          <input
            type="file"
            class="card__img-input visually-hidden"
            name="img"
          />
          <img
            src="img/sample-img.jpg"
            alt="task picture"
            class="card__img"
          />
        </label>

        <div class="card__colors-inner">
          <h3 class="card__colors-title">Color</h3>
          <div class="card__colors-wrap">
            <input
              type="radio"
              id="color-black-6"
              class="card__color-input card__color-input--black visually-hidden"
              name="color"
              value="black"
            />
            <label
              for="color-black-6"
              class="card__color card__color--black"
              >black</label
            >
            <input
              type="radio"
              id="color-yellow-6"
              class="card__color-input card__color-input--yellow visually-hidden"
              name="color"
              value="yellow"
            />
            <label
              for="color-yellow-6"
              class="card__color card__color--yellow"
              >yellow</label
            >
            <input
              type="radio"
              id="color-blue-6"
              class="card__color-input card__color-input--blue visually-hidden"
              name="color"
              value="blue"
            />
            <label
              for="color-blue-6"
              class="card__color card__color--blue"
              >blue</label
            >
            <input
              type="radio"
              id="color-green-6"
              class="card__color-input card__color-input--green visually-hidden"
              name="color"
              value="green"
              checked
            />
            <label
              for="color-green-6"
              class="card__color card__color--green"
              >green</label
            >
            <input
              type="radio"
              id="color-pink-6"
              class="card__color-input card__color-input--pink visually-hidden"
              name="color"
              value="pink"
            />
            <label
              for="color-pink-6"
              class="card__color card__color--pink"
              >pink</label
            >
          </div>
        </div>
      </div>

      <div class="card__status-btns">
        <button class="card__save" type="submit">save</button>
        <button class="card__delete" type="button">delete</button>
      </div>
    </div>
  </form>
</article>`;
};

const cardBoard = document.querySelector(`.board__tasks`);

/** Функция рендера карточек-задач
 * @param {number} number - Кол-во карточек для рендера
 */
const renderTasks = (number) => {
  for (let i = 0; i < number; i++) {
    cardBoard.insertAdjacentHTML(`beforeend`, createCardMarkup());
  }
};

/** Рендерит допополнительные карточки по умолчанию */
renderTasks(Numbers.DEFAULT_CARDS);

/** Удаляет все карточки с кардборда */
const clearCardBoard = () => {
  while (cardBoard.lastElementChild) {
    cardBoard.removeChild(cardBoard.lastElementChild);
  }
};

/** Переключение фильтра в состояние checked
 * @param {object} evt - ивент клика мышкой
 */
const toggleFilter = (evt) => {
  const mainFilter = document.querySelector(`.main__filter`);
  mainFilter.querySelector(`input[type="radio"]:checked`).checked = false;
  evt.target.checked = true;
};

/** Обработка события клика по фильтрам */
const filter = document.querySelector(`.main__filter`);
filter.onclick = (evt) => {
  if (evt.target.className === `filter__label` && !evt.target.previousElementSibling.disabled) {
    toggleFilter(evt);
    clearCardBoard();
    renderTasks(getRandomNumber(Numbers.MAX_RANDOM_CARDS));
  }
};
