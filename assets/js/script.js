const certificados = document.getElementById("certificados");
const about_me = document.getElementById("aboutme");
const proyectos = document.getElementById("proyectos");


certificados.addEventListener("click", () => {
  const main = document.getElementById("main");
  main.innerHTML = `
  <section class="container">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card">
          <img
            src="assets/platzi/ingenieria-software.jpg"
            class="card-img-top"
            alt="Certificado de Ingeniería de Software"
          />
          <div class="card-body">
            <h5 class="card-title">Ingeniería de Software</h5>
            <p class="card-text">
              Certificado de Introducción a la Ingeniería de Software -
              Apps.co y Platzi.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/platzi/git-github.jpg"
            class="card-img-top"
            alt="Certificado de Git y Github"
          />
          <div class="card-body">
            <h5 class="card-title">Git Y Github</h5>
            <p class="card-text">
              Certificado de Git y Github - Apps.co y Platzi.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="./assets/certificados-sololearn/java.png"
            class="card-img-top"
            alt="certificación en Java"
          />
          <div class="card-body">
            <h5 class="card-title">JAVA</h5>
            <p class="card-text">Curso de java en sololearn.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/certificados-sololearn/sql.png"
            class="card-img-top"
            alt="Certificado de SQL"
          />
          <div class="card-body">
            <h5 class="card-title">SQL</h5>
            <p class="card-text">Curso de SQL en Sololearn.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/certificados-sololearn/html.jpg"
            class="card-img-top"
            alt="Certificado de HTML"
          />
          <div class="card-body">
            <h5 class="card-title">HTML</h5>
            <p class="card-text">Curso de HTML en Sololearn.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/certificados-sololearn/javascript.png"
            class="card-img-top"
            alt="Certificado de Javascript"
          />
          <div class="card-body">
            <h5 class="card-title">JAVASCRIPT</h5>
            <p class="card-text">Curso de Javascript en Sololearn.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/certificados-sololearn/python.png"
            class="card-img-top"
            alt="Certificado de Python"
          />
          <div class="card-body">
            <h5 class="card-title">CSS</h5>
            <p class="card-text">Curso de CSS en Sololearn.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/certificados-sololearn/php.png"
            class="card-img-top"
            alt="Certificado de PHP"
          />
          <div class="card-body">
            <h5 class="card-title">PHP</h5>
            <p class="card-text">Curso de PHP en Sololearn.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/acta de grado.jpg"
            class="card-img-top"
            alt="Certificado de acta de grado"
          />
          <div class="card-body">
            <h5 class="card-title">Acta de Grado Bachillerato</h5>
            <p class="card-text">
              Acta individual de grado undécimo grado.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/diploma.jpg"
            class="card-img-top"
            alt="Certificado de acta de grado"
          />
          <div class="card-body">
            <h5 class="card-title">Acta de Diplima de Bachillerato</h5>
            <p class="card-text">
              Acta individual de grado undécimo grado.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/certificados-misiontic/habilidades-web.jpg"
            class="card-img-top"
            alt="Certificado en aplicaciones web"
          />
          <div class="card-body">
            <h5 class="card-title">
              Habilidades en programación con énfasis en aplicaciones web de
              Misión TIC 2022
            </h5>
            <p class="card-text">Mision TIC.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/certificados-misiontic/técnico-laboral.jpg"
            class="card-img-top"
            alt="Certificado de mision tic"
          />
          <div class="card-body">
            <h5 class="card-title">MISION TIC</h5>
            <p class="card-text">Mision TIC.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/certificados-misiontic/Certificado_Mision_c1.jpg"
            class="card-img-top"
            alt="Certificado de mision tic"
          />
          <div class="card-body">
            <h5 class="card-title">MISION TIC</h5>
            <p class="card-text">Mision TIC.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/certificados-misiontic/Certificado_Mision_c2.jpg"
            class="card-img-top"
            alt="Certificado de mision tic"
          />
          <div class="card-body">
            <h5 class="card-title">MISION TIC</h5>
            <p class="card-text">Mision TIC.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/certificados-misiontic/Certificacion_Ciclo_3_.jpg"
            class="card-img-top"
            alt="Certificado de mision tic"
          />
          <div class="card-body">
            <h5 class="card-title">MISION TIC</h5>
            <p class="card-text">Mision TIC.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/certificados-misiontic/Certificacion_Ciclo_4.jpg"
            class="card-img-top"
            alt="Certificado de mision tic"
          />
          <div class="card-body">
            <h5 class="card-title">MISION TIC</h5>
            <p class="card-text">Mision TIC.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/certificados-sena/base-datos.jpg"
            class="card-img-top"
            alt="Certificado de curso de base de datos y sistemas de gestión"
          />
          <div class="card-body">
            <h5 class="card-title">SENA</h5>
            <p class="card-text">
              Base de datos generalidades y sistemas de gestión.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/certificados-sena/calidad-software.jpg"
            class="card-img-top"
            alt="Certificado de curso de aplicación de la calidad del software en el proceso de desarrollo"
          />
          <div class="card-body">
            <h5 class="card-title">SENA</h5>
            <p class="card-text">
              Aplicación de la calidad del software en el proceso de
              desarrollo.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/certificados-sena/habilidades-digitales.jpg"
            class="card-img-top"
            alt="Certificado de curso de desarrollo de habilidades digitales para la gestión de la información"
          />
          <div class="card-body">
            <h5 class="card-title">SENA</h5>
            <p class="card-text">
              Desarrollo de habilidades digitales para la gestión de la
              información.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="assets/certificados-sena/soporte.jpg"
            class="card-img-top"
            alt="Certificado de curso de Procesos de soporte tecnico para el mantenimiento de equipos de computo"
          />
          <div class="card-body">
            <h5 class="card-title">SENA</h5>
            <p class="card-text">
              Procesos de soporte tecnico para el mantenimiento de equipos
              de computo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  `;

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
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Libro Campo</h5>
          <h6 class="card-subtitle mb-2 text-muted">JAVA - POSTGRESQL</h6>
          <p class="card-text">Aplicación para gestionar los cultivos de palma de fincas.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
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
