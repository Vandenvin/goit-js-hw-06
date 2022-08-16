// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputForm = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputForm.addEventListener('input', event => {
  outputName.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    outputName.textContent = 'Anonymous';
  }
});

// Если необходимо вставить имя целиком, а не побуквенно то используем "blur"
// inputForm.addEventListener('blur', event => {
//   outputName.textContent = event.currentTarget.value;
//   if (event.currentTarget.value === '') {
//     outputName.textContent = 'Anonymous';
//   }
// });
