# Todo App

A clean and minimal Todo application built with HTML, CSS, and JavaScript.
This app allows users to add, delete, and persist todos using LocalStorage, ensuring tasks remain saved even after the page is refreshed.

---

## Features

### Add Todos

Type a task and click enter key or the ADD button to save it.

### Mark as Completed

Use the checkbox to mark a task as completed.

### Delete Todos

Remove individual tasks using the delete button.

### LocalStorage Support

Todos are saved automatically and restored when the page reloads.

### Sticky Header and Input

The app title and input section remain fixed at the top while scrolling.

### Modern UI

Includes:

* Dark theme
* Accent color highlights
* Smooth interactions
* Fully responsive layout

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (DOM manipulation, Logic and LocalStorage)

---

## Project Structure

```
project/
│
├── index.html
├── assets/
    ├── icon/
│   ├── css/
│   │   └── todoApp.css
│   └── js/
│       └── todoApp.js
```

---

## How It Works

### Adding a Todo

When the user submits the form:

* The input value is turned into a todo object.
* The object is added to the `allTodos` array.
* The array is saved to LocalStorage.
* The new todo item is rendered in the list.

### Updating the Todo List

`updateTodoList()` clears and rebuilds the list from the `allTodos` array.

### Deleting a Todo

`deleteTodoItem()` removes the selected todo from the array, updates LocalStorage, and refreshes the displayed list automatically.

### You can view the project live
[TodoKitt](https://todokitt.netlify.app/)
