const certificados = document.getElementById("certificados");
const about_me = document.getElementById("aboutme");
const proyectos = document.getElementById("proyectos");

function add_certificados(certificados){
  const main = document.getElementById("main");
  main.innerHTML = "";
  for (let i = 0; i < certificados.length; i++){
    main.innerHTML += `
    <div class="card col-12 col-sm-6 col-md-4">
      <img class="card-img-top" src="${certificados[i].imagen}" alt="${certificados[i].nombre}">
      <div class="card-body">
        <h5 class="card-title">${certificados[i].nombre}</h5>
        <p class="card-text">${certificados[i].empresa}</p>
        <a href="${certificados[i].link}" class="btn btn-primary">Ver certificado</a>
      </div>
    </div>
  `;
  }
  
}

certificados.addEventListener("click", () => {
  const requestURL = 'assets/json/certificados.json';
  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      add_certificados(data);
    })
    .catch((err) => console.log('err'))
});


about_me.addEventListener("click", () => {
  const main = document.getElementById("main");
  main.innerHTML = `
  <section class="container">
    <h1>LUIS VICENTE ALBARRACIN</h1>
    <article>
      <p>
        Soy Estudiante del programa de
        <span> <a href="https://ingsistemas.cloud.ufps.edu.co/"> Ingeniería de Sistemas </a></span> de la
        <span> <a href="https://ww2.ufps.edu.co/">Universidad Francisco de Paula Santander (UFPS)</a> </span>. En el
        año 2021 participe en <span> <a href="https://www.misiontic2022.gov.co/portal/">Misión TIC</a></span> en la
        <span> <a href="https://unab.edu.co/">Universidad Autónoma de Bucaramanga</a></span>, formandome como
        desarrollador en aplicaciones web. Tambien soy miembro del
        <span> <a href="http://siaweb.ufps.edu.co/index.php">Semillero de Investigación Siaweb de la UFPS</a></span>.
      </p>
      <p>
        Me dedico principalmente a desarrollar el Backend de las
        aplicaciones web utilizando tecnologías como Java, con el framework
        Spring, Postgresql o MySQL como base de datos.
      </p>
    </article>
  </section>
  `;
});

function add_proyectos(data){
  const proyectos_html = document.getElementById("main");
  proyectos_html.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    proyectos_html.innerHTML += `
      <div class="card col-sm-6">
        <img class="card-img-top" src="${data[i].imagen}" alt="${data[i].imagen}">
        <div class="card-body">
          <h5 class="card-title">${data[i].nombre}</h5>
          <p class="card-text">${data[i].descripcion} <span class="text-muted">${data[i].tecnologias}</span></p>
          <a href="${data[i].link}" class="Ver"></a>
        </div>
      </div>
  `;
  }

}

proyectos.addEventListener("click", () => {
  const requestURL = 'assets/json/proyectos.json';
  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      add_proyectos(data);
    })
    .catch((err) => console.log('err'))
});

document.body.onload = function(){
  const main = document.getElementById("main");
  main.innerHTML = `
  <section class="container">
    <h1>LUIS VICENTE ALBARRACIN</h1>
    <article>
      <p>
        Soy Estudiante del programa de
        <span> <a href="https://ingsistemas.cloud.ufps.edu.co/"> Ingeniería de Sistemas </a></span> de la
        <span> <a href="https://ww2.ufps.edu.co/">Universidad Francisco de Paula Santander (UFPS)</a> </span>. En el
        año 2021 participe en <span> <a href="https://www.misiontic2022.gov.co/portal/">Misión TIC</a></span> en la
        <span> <a href="https://unab.edu.co/">Universidad Autónoma de Bucaramanga</a></span>, formandome como
        desarrollador en aplicaciones web. Tambien soy miembro del
        <span> <a href="http://siaweb.ufps.edu.co/index.php">Semillero de Investigación Siaweb de la UFPS</a></span>.
      </p>
      <p>
        Me dedico principalmente a desarrollar el Backend de las
        aplicaciones web utilizando tecnologías como Java, con el framework
        Spring, Postgresql o MySQL como base de datos.
      </p>
    </article>
  </section>
  `;
}
