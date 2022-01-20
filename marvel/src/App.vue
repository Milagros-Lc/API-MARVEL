<template>
  <div class="navbar-dark bg-dark p-1" href="#">
    <router-link to="/" class="nav-link" aria-current="page"
      ><img
        class="mx-auto d-block"
        src="./assets/logo_marvel.png"
        alt=""
        width="150"
        height="35"
    /></router-link>
  </div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark my-2">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item mx-3 mt-3 mt-lg-0">
            <router-link to="/" class="nav-link active">Inicio</router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link to="/Heroes" @click="getHeros" class="nav-link"
              >Héroes</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New message</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label"
                >Recipient:</label
              >
              <input type="text" class="form-control" id="recipient-name" />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Message:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            id="send"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>

  <router-view />
</template>

<script>
let listar;

const urlAPI =
  "https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=8db15b8ddd57ce424cfbd8ed525bd7f8";
export default {
  methods: {
    getHeros: function () {
      fetch(urlAPI)
        .then((res) => res.json())
        .then((json) => {
          console.log(json, "RES.JSON");
          let contentHtml = "";
          for (const hero of json.data.results) {
            const dateString = new Date(hero.modified);
            const dateDia =
              dateString.getDate() +
              "-" +
              (dateString.getMonth() + 1) +
              "-" +
              dateString.getFullYear();

            contentHtml += `

                    <div data-id="${hero.id}" class="card m-2 mt-3 contCard" style="width: 16rem;">
                        <img   src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="card-img-top" alt="...">
                    <div class="card-body">
                <h5 class="card-title">${hero.name}</h5>
                  <p> ${dateDia}</p>
                  <textarea class="h-50 w-100 description" data-id="${hero.id}" > ${hero.description}</textarea>
                    </div>
                <button type="button" data-id="${hero.id}" class="btn btn-primary btnupdate" data-bs-toggle="modal" data-bs-target="#exampleModal">
                 Actualizar </button>

                            <p>holaaaaa: ${hero.id} </p>

                  </div>

                    `;
          }
          listar = document.querySelector("#listar");
          listar.innerHTML = contentHtml;
          let btnupdate = document.querySelectorAll(".btnupdate");
          let description = document.querySelectorAll(".description");
          let messageText = document.querySelector("#message-text");
          let send = document.querySelector("#send");

          btnupdate.forEach((btn) => {
            btn.addEventListener("click", (btn) => {
              description.forEach((des) => {
                if (des.dataset.id == btn.target.dataset.id) {
                  let contenido = des.value;
                  console.log("contenido", contenido);
                  messageText.value = contenido;
                  send.addEventListener("click", () => {
                    description.forEach((desc) => {
                      if (desc.dataset.id == des.dataset.id) {
                        des.value = messageText.value;
                        
                      }
                    });
                  });
                }
              });
            });
          });
        });
    },
  },
};
export { listar };
</script>
<style scoped>
nav {
  z-index: 100;
}
.descripcion {
  width: 100%;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #ccc;
  background: transparent;
  resize: none;
  font-size: 1rem;
}
</style>






