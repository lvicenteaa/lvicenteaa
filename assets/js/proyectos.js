function add_proyectos(data){
  const proyectos_html = document.getElementById("main");
  proyectos_html.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    proyectos_html.innerHTML += `
      <div class="card col-sm-6">
        <img class="card-img-top" src="${data[i].imagen}" alt="${data[i].imagen}">
        <div class="card-body">
          <h5 class="card-title h3">${data[i].nombre}</h5>
          <p class="card-text h4">${data[i].descripcion} <span class="text-muted">${data[i].tecnologias}</span></p>
          <a href="${data[i].link}" class="Ver"></a>
        </div>
      </div>
  `;
  }

}

document.body.onload = function(){
  const requestURL = 'assets/json/proyectos.json';
  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      add_proyectos(data);
    })
    .catch((err) => console.log('err'))
};


