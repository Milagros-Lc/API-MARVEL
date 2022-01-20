<template>
   <div  class="mt-5">
    <div class="card mt-2 mx-4 " style="width: 16rem">
      <img
        :src="image(item.thumbnail.path)"
        :title="item.name"
        :alt="item.name"
        class="card-img-top"
      />
      <div class="card-body">
        <h6 :title="item.name" class="card-title">{{ item.name }}</h6>
        <p>
          {{
            new Date(item.modified).getDate() +
            "-" +
            (new Date(item.modified).getMonth() + 1) +
            "-" +
            new Date(item.modified).getFullYear()
          }}
        </p>
        <p>{{ item.description }}</p>
        <a class="btn btn-primary">Actualizar</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsHeros_Marvel",
  methods: {
    image(url) {
      return `${url}.jpg`;
    },
  },
  props: {
    item: Object,
  },
};
</script>
