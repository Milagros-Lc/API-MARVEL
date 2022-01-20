t<template>
  <h1>{{ title }}</h1>
  <Search :search-api="searchApi" />
  <Results :searchText="searchText" :results="results" />
</template>

<script>
import Search from "../components/SearchHeros_Marvel.vue";
import Results from "../components/ResultsHeros_Marvel.vue";

export default {
  name: "AppSearch",
  components: {
    Search,
    Results,
  },
  data() {
    return {
      results: [],
      searchText: "",
    };
  },
  methods: {
    searchApi: function (searchText) {
      this.searchText = searchText;
      fetch(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchText}&apikey=8db15b8ddd57ce424cfbd8ed525bd7f8`
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json, "RES.JSON");
          console.log(json.data.results);
          this.results = json.data.results;
        });
    },
  },
};
</script>

