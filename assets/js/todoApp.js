const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoListUL = document.getElementById('todo-list');

let allTodos = getTodos();
updateTodoList();

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
});

// ADD TODO
function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText.length > 0) {
    const todoObject = {
      text: todoText,
      completed: false
    };

    allTodos.unshift(todoObject);
    saveTodos();
    updateTodoList();
    todoInput.value = '';
  }
}

// UPDATE LIST
function updateTodoList() {
  todoListUL.innerHTML = '';

  allTodos.forEach((todo, todoIndex) => {
    const todoItem = createTodoItem(todo, todoIndex);
    todoListUL.append(todoItem);
  });
}

// CREATE ITEM
function createTodoItem(todo, todoIndex) {
  const todoId = 'todo-' + todoIndex;
  const todoLI = document.createElement('li');
  todoLI.className = 'todo';

  todoLI.innerHTML = `
    <input type="checkbox" id="${todoId}">
    <label class="custom-checkbox" for="${todoId}">
    <svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/></svg>
    </label>
    <label for="${todoId}" class="todo-text">
        ${todo.text}
    </label>
    <button class="delete-button">
    <svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="24px" fill="#4a4d57"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
    </button>
  `;

  const deleteBtn = todoLI.querySelector('.delete-button');
  deleteBtn.addEventListener('click', () => deleteTodoItem(todoIndex));

  const checkbox = todoLI.querySelector('input');
  checkbox.addEventListener('change', () => {
    allTodos[todoIndex].completed = checkbox.checked;
    saveTodos();
  });

  checkbox.checked = todo.completed;

  return todoLI;
}

// DELETE ITEM
function deleteTodoItem(todoIndex) {
  allTodos = allTodos.filter((_, i) => i !== todoIndex);
  saveTodos();
  updateTodoList();
}

// SAVE + GET
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(allTodos));
}

function getTodos() {
  return JSON.parse(localStorage.getItem('todos') || '[]');
}
