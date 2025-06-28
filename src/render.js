export function render(selector, content) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = content;
  }
}
