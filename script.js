const flexContainer = document.querySelector('.js-flex-container');

function onChange() {
  Array.from(this.elements).forEach(element => {
    if (element.checked) {
      flexContainer.style[element.name] = element.value;
    }
  });
}

document.querySelector('.js-form').addEventListener('change', onChange);
