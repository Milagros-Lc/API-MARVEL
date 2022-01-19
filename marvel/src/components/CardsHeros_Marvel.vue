<template>
<div class="lista">
  
    <li>
		<h6 :title="item.name"><span>{{item.name}}</span></h6>
		<img :src="image(item.thumbnail.path)" :title="item.name" :alt="item.name">
	</li>
</div>
</template>

<script>

export default {
name: "CardsHeros_Marvel",
  methods: {
    image(url){
      return `${url}/portrait_incredible.jpg`
    }
  },
  props: {
    item: Object,
 
  },
};

</script>

