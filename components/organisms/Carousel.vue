<template>
  <v-carousel v-model="model">
    <v-carousel-item
      v-for="movie in movies"
      :key="movie.id"
      :src="movie.image_path"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    </v-carousel-item>
  </v-carousel>
</template>


<script>
import { defineComponent, useContext, useAsync } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "Carousel",
  data: () => ({
    model: 0,
  }),
  setup() {
    const model = 0;
    const { app } = useContext();
    const movies = useAsync(async () => {
      const response = await app.$repositories("movie").getMainVisual();
      console.log(response);
      return response.data;
    });

    return { movies };
  },
});
</script>
