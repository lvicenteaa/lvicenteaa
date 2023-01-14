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

proyectos.addEventListener("click", () => {
  const main = document.getElementById("main");
  main.innerHTML = `
  <section>
    <div class="row">
      <div class="card col-sm-6">
        <div class="card-body">
          <h5 class="card-title">Libro Campo</h5>
          <h6 class="card-subtitle mb-2 text-muted">JAVA - POSTGRESQL</h6>
          <p class="card-text">Aplicación para gestionar los cultivos de palma de fincas.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
      <div class="card col-sm-6">
        <div class="card-body">
          <h5 class="card-title">Movilidad</h5>
          <h6 class="card-subtitle mb-2 text-muted">PHP - MYSQL</h6>
          <p class="card-text">Aplicación para registrar las salidas y entradas por Movilidad de Docentes y Estudiantes de Ingeniería de Sistemas de la UFPS.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div>
  </section>
  `;
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
