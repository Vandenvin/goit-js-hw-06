// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>
// JavaScript містить масив рядків.

// const ingredients = [
// "Potatoes",
// "Mushrooms",
// "Garlic",
// "Tomatos",
// "Herbs",
// "Condiments",
// ];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// <li>Potatoes</li>
// <li>Mushrooms</li>
// <li>Garlic</li>
// <li>Tomatos</li>
// <li>Herbs</li>
// <li>Condiments</li>

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listEl = document.querySelector('#ingredients');

// for (let i = 0; i < ingredients.length; i += 1) {
// const element = document.createElement('li');
// element.textContent = ingredients[i];
// element.classList = 'item';
// console.log(element);
// listEl.append(element);
// }

const elements = ingredients.map(element => {
  const item = document.createElement('li');

  item.textContent = element;
  item.classList = 'item';

  return item;
});

listEl.append(...elements);
