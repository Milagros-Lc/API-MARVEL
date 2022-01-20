<template>
	<form v-on:submit.prevent="searchApi(searchText, $event)" class="d-flex justify-content-center">
		<input v-model="searchText" placeholder="Busca tu personaje favorito" type="text" id="searchText" name="searchText" class="form-control w-50 mx-2" required>
	<button class="btn btn-danger" type="submit">Buscar</button>
	</form>
  
</template>
<script>
	export default {
  name: 'Search',
  data(){
    return {
      searchText: '',
    }
  },
  props: {
    searchApi: Function
  }
}
</script>
<style>
input {
  max-width: 500px;
}
</style>
