const createFilterMarkup = (filter, isChecked) => {
  const {name, count} = filter; // вытаскиваем из объекта значения и кладём их в переменные под тем же именем

  return (
    `<input
      type="radio"
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
    />
    <label for="filter__${name}" class="filter__label">
      ${name} <span class="filter__${name}-count">${count}</span></label
    >`
  );
};

export const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);
  // А вот тут я что-то выехал зачем этот фокус с индексом элемента и сравнение его с нулём.
  // Типа первый элемент вернёт истину... Чтобы чекед был всегда первый элемент чтоли?
  // (это я догадываюсь, что за этим, но упустил момент, как это произойдёт, на каком этапе)
  // На первом применении функции createFilterMarkup... Первый аргумент - объект, второй - индекс...
  // То есть на первом прогоне передаётся в функцию во второй параметр 0 === 0 (<- прикольный смайлик)...
  // И возвращается значение true... Тогда тернарный оператор вернёт `checked`... блин, нахрена так сложно делать >_<

  return `<section class="main__filter filter container">
    ${filtersMarkup}
  </section>`;
};
