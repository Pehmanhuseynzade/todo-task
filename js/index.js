let textInput = document.querySelector(".text");
let todos = document.querySelector(".todos");
let submit = document.querySelector(".fa-plus-btn");
let result = document.querySelector(".result");
let clearAllButton = document.querySelector(".clear");
let todoCount = document.querySelector(".todo-count");

let count = 0; // Initialize the count to 0

todos.addEventListener("submit", (e) => {
    e.preventDefault();
    const product = {
        name: textInput.value
    };

    // Reset input
    textInput.value = "";

    createText(product);
    updateTodoCount(1); // Increment count by 1 when a new todo is added
});

result.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove(); // Remove the parent element when the delete button is clicked
        updateTodoCount(-1); // Decrement count by 1 when a todo is deleted
    }
});

clearAllButton.addEventListener("click", () => {
    result.innerHTML = ''; // Remove all to-do items
    updateTodoCount(-count); // Reset count to 0 when all todos are cleared
});

function createText(product) {
    const newTodo = document.createElement("div");
    newTodo.innerHTML = `
    <div style="display:flex;gap:10px">
    <p class="result-p">${product.name}</p>
    <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    result.appendChild(newTodo);
}

function updateTodoCount(change) {
    count += change; // Update the count
    todoCount.textContent = count; // Update the displayed count
}

textInput.addEventListener("keyup", (e) => {
    if (e.target.value.length < 3) {
        e.target.nextElementSibling.style.display = "block";
        submit.setAttribute("disabled", "");
    } else {
        e.target.nextElementSibling.style.display = "none";
        submit.removeAttribute("disabled");
    }
});
