# Lab 2 – Array Manipulation

This is a simple web project I built as part of Module 4 Lab 2.  
It uses JavaScript to manage a shopping list using array methods.

The project allows me to:
- Add items to a list
- Prevent duplicate items
- Remove the last item
- Filter items in the array (via code)
- Display the list dynamically in the browser

## How to Use
1. Open `index.html` in a browser.
2. Type an item in the input field and click **Add Item**.
3. Click **Remove Last Item** to delete the last one.
4. The list updates automatically.

---

## Reflection Questions

### 1. How did array methods like `push()` and `filter()` help you manipulate data in this activity?

**Answer:**  
I used `push()` to add new items to the array.  
`filter()` helped me create a new array with items matching a search term.  
Both methods made it easier for me to update and search the list dynamically.

### 2. What challenges did you face when trying to filter and search for items in the array?

**Answer:**  
My main challenge was making the filter case-insensitive and checking for duplicates.  
I solved this by converting everything to lowercase using `.toLowerCase()` before comparing.

### 3. How would you modify this code to make it more efficient or user-friendly?

**Answer:**  
I would add a search bar to let users filter the list live.  
Also, I would show a message if someone tries to add a duplicate item or leaves the input empty.



