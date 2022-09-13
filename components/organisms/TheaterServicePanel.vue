<template>
  <div>
    <h2 class="mb-4">劇場サービス</h2>
    <v-row align="left">
      <v-col cols="6" v-for="service in services" :key="service.title">
        <square-card
          :title="service.title"
          :image_path="service.image_path"
          :to="service.link"
          :description="service.description"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SquareCard from "../molecules/SquareCard.vue";
import { useContext, useAsync } from "@nuxtjs/composition-api";
export default {
  components: { SquareCard },
  name: "TheaterServicePanel",
  setup() {
    const { app } = useContext();
    const services = useAsync(async () => {
      const response = await app.$repositories("service").getTheaterService();
      console.log(response.data);
      return response.data;
    });

    return { services };
  },
};
</script>