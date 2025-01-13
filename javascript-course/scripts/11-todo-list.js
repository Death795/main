const todoList = [{
  name: '', 'wash dishes',
  dueDate: '13-01-2025'
}, {
  name: 'make dinner',
  dueDate: '13.01.2025'
}];

renderTodoList();

function renderTodoList() {


  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const ame = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
    <p>
    ${name} ${dueDate} 
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    ">Delete</button>
    </p>
    `;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value

  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}