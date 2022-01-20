<template>
  <div class="Update">

<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>


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


<script>
export default {
  name: 'UpdateHeros_Marvel',

}
</script>
