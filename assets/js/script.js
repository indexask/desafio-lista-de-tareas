tareas = [
  { id: 1, mision: "Hacer el aseo", realizada: false },
  { id: 2, mision: "Hacer la cama", realizada: false },
  { id: 3, mision: "Pasear al perro", realizada: false },
];
i = 3;
echas = document.querySelector(".realized");
boton = document.querySelector("#boton");
tabla = document.querySelector("table");
html = document.querySelector("body");

boton.addEventListener("click", () => {
  input = document.querySelector("#tarea");
  agregar();
  actualizar();
  console.log(tareas);
});

agregar = () => {
  i++;
  ids = tareas[tareas.length - 1 ].id;
  ids++;
  nuevaTarea = { id: ids, mision: input.value, realizada: false };
  tareas.push(nuevaTarea);
  actualizar();
};

borrar = (id) => {
  i--;
  indice = tareas.findIndex((numero) => numero.id == id);
  tareas.splice(indice, 1);
  actualizar();
};

actualizar = () => {
  console.log(tareas);
  let html = "";
  html += `<h1>Numero de tareas: ${i}</h1>
  
  `;
  for (let tarea of tareas) {
    html += `
      <tr>
          <th>
              <h1>${tarea.id}</h1>
          </th>
          <th>
              <h1>${tarea.mision}</h1>
          </th>
          <th>
          <button onclick="borrar(${tarea.id})">X</button>
          </th>
          <th>
          <input  type="checkbox" id="checkbox${tarea.id}"  class="checkbox" onclick="realized(${tarea.id})">
          </th>
      </tr> 
      `
     /*  if (tarea.realizada) {
        document.querySelector(`#checkbox${tarea.id}`).setAttribute('checked', 'checked');
      } */
  }
  ready = echas.innerHTML = tareas.filter(
    (element) => element.realizada == true
  ).length;
  tabla.innerHTML = html;
};



function realized(id) {
  tarea = tareas.filter((element) => element.id == id)[0];
  tarea.realizada = !tarea.realizada;
  actualizar();
}

actualizar();
