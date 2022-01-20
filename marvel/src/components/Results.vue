t<template>
	<h1>{{title}}</h1>
	<Search :search-api="searchApi"/>
	<Results :searchText="searchText" :results="results"/>

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
        results: [],
        searchText: ""
      }
    },
    methods: {
      searchApi(searchText){
        this.searchText = searchText;
        axios.get(`https://marvel---api.herokuapp.com/api/characters?name=${searchText}&limit=12`)
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

