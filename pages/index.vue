<template>
  <div>
    <TabMenu :active=1 />
    <v-row justify="center" align="center">
      <v-col cols="12">
        <carousel />
      </v-col>
    </v-row>
     <ImageBanners />
  </div>
</template>

<script>
import Carousel from '~/components/Carousel.vue';
export default {
  components: { Carousel },
  name: "IndexPage",
};
</script>
