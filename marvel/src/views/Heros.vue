<template>
  <div class="heroes">
    <h1>This is an HEROES page</h1>

    <Heros_Marvel></Heros_Marvel>
    <ListHeros_Marvel></ListHeros_Marvel>

  </div>
</template>
<script>

import  Heros_Marvel from '../components/Heros_Marvel.vue'
import  ListHeros_Marvel from '../components/ListHeros_Marvel.vue'
export default {
components:{
Heros_Marvel,
ListHeros_Marvel
  }
}
</script>