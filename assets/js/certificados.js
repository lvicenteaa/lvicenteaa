const pagina = document.body;

function add_certificados(certificados){
  const main = document.getElementById("main");
  main.innerHTML = "";
  for (let i = 0; i < certificados.length; i++){
    main.innerHTML += `
    <div class="card col-12 col-sm-6 col-md-4">
      <img class="card-img-top" src="${certificados[i].imagen}" alt="${certificados[i].nombre}">
      <div class="card-body">
        <h5 class="card-title h3">${certificados[i].nombre}</h5>
        <p class="card-text h4">${certificados[i].empresa}</p>
        <a href="${certificados[i].link}" class="btn btn-primary">Ver certificado</a>
      </div>
    </div>
  `;
  }
  
}

document.body.onload = function(){
  const requestURL = 'assets/json/certificados.json';
  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      add_certificados(data);
    })
    .catch((err) => console.log('err'))
};

