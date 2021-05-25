const listContainer = document.getElementById('list-container');

/**
 * Renders an array of strings as an >>>unordered list(!)<<< into the #list-container element
 *
 * @param {string[]} [toRender=[]] - an array of strings to render into the UI
 */
export const updateList = (toRender = []) => {
  const listItems = toRender.reduce((all, next) => {
    return `${all}<li>${next}</li>`;
  }, '');
  const sortedList = `<ul>${listItems}</ul>`;
  listContainer.innerHTML = sortedList;
};
