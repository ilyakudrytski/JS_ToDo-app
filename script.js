const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

form.addEventListener('submit', event => {
    event.preventDefault();

    const todoText = input.value;
    if (todoText) {
        const todoEl = document.createElement('li');
        todoEl.innerText = todoText;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
        })

        todoEl.addEventListener('contextmenu', event => {
            event.preventDefault();
            todoEl.remove()
        })

        todos.append(todoEl);
        input.value = '';

    }
})