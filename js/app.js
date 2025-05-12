const shoppingList = [];

function addItemToList(item) {
  if (!item) return;
  const itemLower = item.toLowerCase();
  const exists = shoppingList.some(existing => existing.toLowerCase() === itemLower);
  if (!exists) {
    shoppingList.push(item);
    updateDisplay();
  }
}

function removeLastItem() {
  shoppingList.pop();
  updateDisplay();
}

function filterItems(searchTerm) {
  return shoppingList.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

function updateDisplay() {
  const ul = document.getElementById('shoppingListDisplay');
  ul.innerHTML = '';
  shoppingList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
  console.log(shoppingList);
}

document.getElementById('addButton').addEventListener('click', () => {
  const input = document.getElementById('itemInput');
  addItemToList(input.value.trim());
  input.value = '';
  input.focus();
});

document.getElementById('removeButton').addEventListener('click', removeLastItem);
