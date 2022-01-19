<template>
	<ul>
		<Card v-for="item in results" :item="item" :key="item"/>
		<li v-show="results.length===0 && term.length > 0">No Heroes</li>
	</ul>
</template>

<script>
	import Card from '../components/CardsHeros_Marvel.vue';
	export default {
  name: 'Search',
  props: {
    results: Array,
    term: String
  },
      components: {
      Card
    }

}
</script>

