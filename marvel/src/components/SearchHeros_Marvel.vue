<template>
	<form v-on:submit.prevent="searchApi(term, $event)" class="search-form">
		<label for="term">Marvel Search</label>
		<input v-model="term" type="text" id="term" name="term" required>
		<button>Search</button>
	</form>
</template>

<script>
	export default {
  name: 'Search',
  data(){
    return {
      term: '',
    }
  },
  props: {
    searchApi: Function
  }
}
</script>

