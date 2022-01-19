<template>
  <div id="app">
    <div id="nav">
      <div class="navbar-dark bg-dark p-1" href="#">
        <router-link to="/" class="nav-link " aria-current="page"
          ><img
            class="mx-auto d-block"
            src="./assets/logo_marvel_anonimo.jpg"
            alt=""
            width="140"
            height="35"
        /></router-link>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark m-2">
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
              <li class="nav-item">
                <router-link to="/" class="nav-link active">Inicio</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Heroes" class="nav-link ">Héroes</router-link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-danger" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <router-view />
</template>







<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
