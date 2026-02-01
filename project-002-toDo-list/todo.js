let todoListContainer = document.querySelector('.todo-list-container');
let addButton = document.querySelector('.add');

function getTextareaValue() {
  return document.querySelector('#textarea').value.trim();
}

function createTodoItem(text) {
  let itemDiv = document.createElement('div');
  let removeButton = document.createElement('button');
  itemDiv.className = 'item';
  itemDiv.textContent = text;
  removeButton.textContent = 'delete';
  removeButton.className = 'delete';
  itemDiv.appendChild(removeButton);
  return itemDiv;
}

function addTodoItemToList(element) {
  todoListContainer.appendChild(element);
}

function resetTextarea() {
  document.querySelector('#textarea').value = '';
}

function addTodo() {
  let text = getTextareaValue()
  if (!text) return;
  let item = createTodoItem(text);
  addTodoItemToList(item);
  resetTextarea();
}

todoListContainer.addEventListener('click', (e)=> {
  if (e.target.classList.contains('delete')) {
    e.target.closest('.item').remove();
  };
});

addButton.addEventListener('click', addTodo);
