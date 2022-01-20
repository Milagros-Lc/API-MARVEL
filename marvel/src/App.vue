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

  <router-view />
</template>

<script>
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
                <div class="row-sm-3">
                    <div class="card" style="width: 18rem;">
                        <img   src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="card-img-top" alt="...">
                    <div class="card-body">
                <h5 class="card-title">${hero.name}</h5>
                  <p> ${dateDia}</p>
                  <p> ${hero.description}</p>
                    </div>
                  </div>
                </div>
                    `;
          }

          console.log(contentHtml);
        });
    },
  },
};
</script>
<style scoped>
nav {
  z-index: 100;
}
</style>






