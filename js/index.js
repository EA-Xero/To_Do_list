function addtask() {
    const title = document.getElementById("task-title").value.trim();
    const desc = document.getElementById("task-info").value.trim();
    const date = document.getElementById("task-date").value.trim();
    const form = document.getElementById("task");
    console.log("Title:", title, "Desc:", desc, "Date:", date);

    if (title === "" || desc === "") {
        alert("It is necessary to add a title and a description");
        return;
    }

    const taskslist = document.getElementsByClassName("tasks-list not")[0];
    if (!taskslist) {
        console.error("No se encontró el elemento con la clase 'tasks-list not'");
        return;
    }

    // Crear los elementos
    const li = document.createElement('li');
    li.className = 'task';

    const titulo = document.createElement('span');
    titulo.className = 'task-title';
    titulo.textContent = title;

    const descripcion = document.createElement('span');
    descripcion.className = 'task-info';
    descripcion.textContent = desc;
    let fecha = null
    // Solo crear y agregar la fecha si existe
    if (date !== "") {
        fecha = document.createElement('span');
        fecha.className = 'task-date';
        fecha.textContent = date;
    }

    // Añadir los elementos al <li>
    li.appendChild(titulo);
    li.appendChild(descripcion);
    if (fecha) {
        li.appendChild(fecha);
    }

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons';

    const completeButton = document.createElement('button');
    completeButton.className = 'complete';
    completeButton.textContent = 'Complete';
    completeButton.onclick = function(event) {
        event.preventDefault();
        completetask(event);
    };

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function(event) {
        event.preventDefault();
        deletetask(event);
    };

    buttonsDiv.appendChild(completeButton);
    buttonsDiv.appendChild(deleteButton);

    li.appendChild(buttonsDiv);
    // Añadir el <li> a la lista de tareas
    taskslist.appendChild(li);
    form.reset()
}

function deletetask(event){
    const button = event.target;
    const task = button.closest('li');
    if(task){
        task.remove();
    }else{
        alert('error');
    }
}

function completetask(event){
    const button = event.target;
    const li = button.closest('li');
    const comparador = li.childNodes
    const arreglo=[];
    for(i=0;i<comparador.length;i++){
        if(comparador[i].tagName === 'SPAN'){
            arreglo.push(comparador[i])
        }
    }
    const valores = {
        titulo: arreglo[0].textContent,
        informacion: arreglo[1].textContent,
        fecha: arreglo[2]?.textContent
    }

    const taskslist = document.getElementsByClassName("tasks-list completed")[0];
    if (!taskslist) {
        console.error("No se encontró el elemento con la clase 'tasks-list completed'");
        return;
    }

    const task = document.createElement('li');
    task.className = 'task';

    const titulo = document.createElement('span');
    titulo.className = 'task-title';
    titulo.textContent = valores.titulo;

    const descripcion = document.createElement('span');
    descripcion.className = 'task-info';
    descripcion.textContent = valores.informacion;
    let date = null
    // Solo crear y agregar la fecha si existe
    if (valores.fecha !== "") {
        date = document.createElement('span');
        date.className = 'task-date';
        date.textContent = valores.fecha;
    }

    task.appendChild(titulo);
    task.appendChild(descripcion);
    if (date) {
        task.appendChild(date);
    }

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons';

    const UncompleteButton = document.createElement('button');
    UncompleteButton.className = 'Uncomplete';
    UncompleteButton.textContent = 'Uncomplete';
    UncompleteButton.onclick = function(event) {
        event.preventDefault();
        Uncompletetask(event);
        deletetask(event);
    };

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function(event) {
        event.preventDefault();
        deletetask(event);
    };

    buttonsDiv.appendChild(UncompleteButton);
    buttonsDiv.appendChild(deleteButton);

    task.appendChild(buttonsDiv);
    // Añadir el <li> a la lista de tareas
    taskslist.appendChild(task);
    deletetask(event);
}

function Uncompletetask(event){
    const button = event.target;
    const li = button.closest('li');
    const valores = {
        titulo: li.childNodes[0].textContent,
        informacion: li.childNodes[1].textContent,
        fecha: li.childNodes[2].textContent
    }

    const taskslist = document.getElementsByClassName("tasks-list not")[0];
    if (!taskslist) {
        console.error("No se encontró el elemento con la clase 'tasks-list not'");
        return;
    }

    const task = document.createElement('li');
    task.className = 'task';

    const titulo = document.createElement('span');
    titulo.className = 'task-title';
    titulo.textContent = valores.titulo;

    const descripcion = document.createElement('span');
    descripcion.className = 'task-info';
    descripcion.textContent = valores.informacion;
    let date = null
    // Solo crear y agregar la fecha si existe
    if (valores.fecha !== "") {
        date = document.createElement('span');
        date.className = 'task-date';
        date.textContent = valores.fecha;
    }

    task.appendChild(titulo);
    task.appendChild(descripcion);
    if (date) {
        task.appendChild(date);
    }

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons';

    const completeButton = document.createElement('button');
    completeButton.className = 'complete';
    completeButton.textContent = 'Complete';
    completeButton.onclick = function(event) {
        event.preventDefault();
        completetask(event);
        deletetask(event);
    };

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function(event) {
        event.preventDefault();
        deletetask(event);
    };

    buttonsDiv.appendChild(completeButton);
    buttonsDiv.appendChild(deleteButton);

    task.appendChild(buttonsDiv);
    // Añadir el <li> a la lista de tareas
    taskslist.appendChild(task);
    deletetask(event);
}