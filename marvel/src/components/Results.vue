t<template>
	<h1>{{title}}</h1>
	<Search :search-api="searchApi"/>
	<Results :term="term" :results="results"/>
	
</template>

<script>
	import Search from '../components/SearchHeros_Marvel.vue';
  import Results from '../components/ResultsHeros_Marvel.vue';

  import axios from 'axios'
  export default {
    name: 'AppSearch',
    components: {
      Search,
      Results,

    },
        data(){
      return {
        title: 'Marvel API Search',
        results: [],
        term: ""
      }
    },
    methods: {
      searchApi(term){
        this.term = term;
        axios.get(`https://marvel---api.herokuapp.com/api/characters?name=${term}&limit=12`)
        .then( (response)=> {
          console.log(response.data.results)
          this.results = response.data.results;
        })
        .catch( (error)=> {
          console.log(error);
        }     
        );

      }
    },

  }
</script>

