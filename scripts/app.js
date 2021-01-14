var tasks = []; //Lista de tareas

document.getElementById('formTask').addEventListener('submit', (e) => {
    saveTask();
    document.getElementById('formTask').reset();
    e.preventDefault();
});

function saveTask() {
    let title = document.getElementById('title').value; //Obtiene el titulo del input
    let description = document.getElementById('description').value; //Obtiene la descripcion del input

    //Lo convierte a un objeto
    let task = {
        title,
        description
    };

    //lo añade al array
    tasks.push(task);

    getTasksView();
}

function getTasksView() {
    let tasksView = document.getElementById('tasksList');

    tasksView.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;

        let taskTemplate = `
        <div class="card mb-4">
        <div class="card-body">
        <h4 class="card-title">${title}</h4>
        <p class="card-text">${description}</p>
        <a href="#" class="btn btn-danger" onclick="deleteTask('${title}')">Delete <i class="bi bi-trash"></i></a>
        </div>
        </div>
        `;

        tasksView.innerHTML += taskTemplate;
    }

}

function deleteTask(a) {
    console.log(a);
    for (let i = 0; i < tasks.length; i++) {
        
        if(tasks[i].title == a) {
            tasks.splice(i, 1)
        }
    }
    getTasksView();
}