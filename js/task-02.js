const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');


// for (let i = 0; i < ingredients.length; i++) {
//   const itemSrc = document.createElement(`li`);
//   itemSrc.textContent = ingredients[i];
//   itemSrc.classList.add('item');
//   list.append(itemSrc);
// }

const outputIngredients = ingredients.map((ingredient) => {
  const itemSrc = document.createElement(`li`);
  itemSrc.textContent = ingredient;
  itemSrc.classList.add('item');
  list.append(itemSrc);
  return itemSrc;
  
});
console.log(outputIngredients)