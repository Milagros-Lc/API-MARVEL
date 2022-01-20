<template>
	<div class="container d-flex flex-wrap justify-content-center">
		<Card  v-for="item in results" :item="item" :key="item"/>
    </div>
</template>

<script>
	import Card from '../components/CardsHeros_Marvel.vue';
	export default {
  name: 'ResultsHeros_Marvel',
  props: {
    results: Array,
    searchText: String
  },
      components: {
      Card
    }

}
</script>

