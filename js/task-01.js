// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = document.querySelector('#categories');
const categoriesList = categories.children;
console.log('Number of categories: ', categoriesList.length);

for (let i = 0; i < categoriesList.length; i += 1) {
  const category = categoriesList[i];

  const categoryName = category.querySelector('h2').textContent;
  console.log('Category: ', categoryName);

  const elementsOfCategory = category.querySelector('ul');
  const countElementsOfCategory = elementsOfCategory.children.length;
  console.log('Elements: ', countElementsOfCategory);
}
