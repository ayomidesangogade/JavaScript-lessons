const todoList = [];

renderTodoList();

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    })

    renderTodoList();
}

function renderTodoList() {
    let htmlContent = '';

    for (let i = 0; i < todoList.length; i++) {
        htmlContent += `<div>${todoList.name}</div><div>${todoList.dueDate}<div/><button onclick="todoList.splice(${i},1); renderTodoList();" class="delete-todo-button">Delete<button/>`
    }

    document.querySelector('.js-todo-list').innerHTML = htmlContent;
}