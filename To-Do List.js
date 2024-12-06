// Seleciona os elementos do HTML
const inputTask = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// Função para adicionar uma nova tarefa
function addTask() {
    // Verifica se o campo de entrada não está vazio
    if (inputTask.value.trim() !== "") {
        // Cria o elemento da nova tarefa
        const newTask = document.createElement("li");
        newTask.textContent = inputTask.value;

        // Adiciona um botão para remover a tarefa
        const removeButton = document.createElement("button");
        removeButton.textContent = "Excluir";
        removeButton.classList.add("remove-btn");
        removeButton.onclick = function () {
            taskList.removeChild(newTask);
        };

        // Anexa o botão de remoção à tarefa
        newTask.appendChild(removeButton);

        // Adiciona a nova tarefa à lista
        taskList.appendChild(newTask);

        // Limpa o campo de entrada
        inputTask.value = "";
    } else {
        alert("Por favor, insira uma tarefa!");
    }
}

// Evento de clique no botão de adicionar tarefa
addButton.addEventListener("click", addTask);

// Permitir adicionar tarefa ao pressionar Enter
inputTask.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
