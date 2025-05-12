// Task 1: Array Manipulation Basics

const shoppingList = [];

function addItemToList(item) {
  shoppingList.push(item);
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
