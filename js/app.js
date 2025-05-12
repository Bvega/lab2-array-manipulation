// Task 2: Add filtering and duplicate check

const shoppingList = [];

function addItemToList(item) {
  if (!item) return;
  const itemLower = item.toLowerCase();
  const exists = shoppingList.some(existing => existing.toLowerCase() === itemLower);
  if (!exists) {
    shoppingList.push(item);
  }
}

function removeLastItem() {
  shoppingList.pop();
}

function displayList() {
  console.clear();
  console.log("Shopping List:");
  shoppingList.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}

function filterItems(searchTerm) {
  return shoppingList.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
