// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid,
// які ми вже додали у вихідні файли завдання.

const inputForm = document.querySelector('#validation-input');
const maxLength = Number(inputForm.dataset.length);

inputForm.addEventListener('blur', event => {
  const outputData = event.currentTarget.value;

  if (outputData.length === maxLength) {
    inputForm.classList.remove('invalid');
    inputForm.classList.add('valid');
    return;
  }
  inputForm.classList.remove('valid');
  inputForm.classList.add('invalid');
});
