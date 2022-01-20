<template>
  <form
    v-on:submit.prevent="searchApi(searchText, $event)"
    class="d-flex justify-content-center"
  >
    <input
      v-model="searchText"
      placeholder="Busca tu personaje favorito"
      type="text"
      id="searchText"
      name="searchText"
      class="form-control w-50 mx-2"
      required
    />
    <button @click="clean" class="btn btn-danger" type="submit">Buscar</button>
  </form>
  <div
    class="container justify-content-center d-flex flex-wrap"
    id="listar"
  ></div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      searchText: "",
    };
  },
  props: {
    searchApi: Function,
  },
  methods: {
    clean: function () {
      let listar = document.querySelector("#listar");
      listar.innerHTML = "";
    },
  },
};
</script>
<style>
input {
  max-width: 500px;
}
</style>
