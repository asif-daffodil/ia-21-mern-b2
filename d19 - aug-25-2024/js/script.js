const todoForm = document.querySelector('#todoForm');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(todoForm);
    const todoInput = formData.get('todoInput');
    const todoList = document.querySelector('#todoList');
    const list = document.createElement('li');
    list.classList.add('list');
    const todoText = document.createElement('span');
    todoText.classList.add('todoText');
    todoText.textContent = todoInput;
    const todoComplete = document.createElement('button');
    todoComplete.classList.add('todoComplete');
    todoComplete.innerHTML = '<i class="fa-solid fa-check"></i>';
    const todoDelete = document.createElement('button');
    todoDelete.classList.add('todoDelete');
    todoDelete.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    list.appendChild(todoText);
    list.appendChild(todoComplete);
    list.appendChild(todoDelete);
    todoList.prepend(list);
    todoForm.reset();

    todoComplete.addEventListener('click', () => {
        todoText.classList.add('completed');
        todoComplete.disabled = true;
        todoComplete.classList.add('disabled');
    });

    todoDelete.addEventListener('click', () => {
        confirm('Are you sure you want to delete this task?') && list.remove();
    });
});