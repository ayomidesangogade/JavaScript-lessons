const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    });

    localStorage.setItem('todoList', JSON.stringify(todoList));

    inputElement.value = '';

    renderTodoList();
}

function addTodoOnKeyDown(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}

function renderTodoList() {
    let htmlContent = '';

    for (let i = 0; i < todoList.length; i++) {
        htmlContent += `
            <div>${todoList[i].name}</div>
            <div>${todoList[i].dueDate}</div>
            <button onclick="
                todoList.splice(${i},1);
                renderTodoList();
            " class="delete-todo-button">
                Delete
            </button>
        `;
    }

    document.querySelector('.js-todo-list').innerHTML = htmlContent;
}