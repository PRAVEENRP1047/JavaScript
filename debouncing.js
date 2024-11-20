/**
 * Debouncing:
 *    Debouncing is a programming technique which is used to limit the rate at which a function is executed. In
 * JS, debouncing is applied to rapidly occuring events like keypress, scrolling events, etc.,.
 */

const debounce = (callback, delay) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(), delay);
  };
};

const debounceSearch = debounce(() => console.log("called search"), 3000);

const input = document.getElementById("searchInput");
input.addEventListener("input", debounceSearch);

/**
 * Reference:
 *  https://www.youtube.com/watch?v=Zo-6_qx8uxg
 */
