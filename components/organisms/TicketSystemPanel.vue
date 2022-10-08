<template>
  <div class="ticket-system-panel py-5 mb-5 px-4 rounded">
    <panel-title
      to="#"
      icon="mdi-ticket-confirmation"
      title="オンラインチケット購入システム"
      etitle="ONLINE TICKET SALES"
      :list_link="false"
    />
    <div class="px-2">
      <v-img
        class="my-5"
        src="https://i.picsum.photos/id/20/600/300.jpg?hmac=h9oYqivPeqqfL8YLGiJLPwQiCqrpurvUGA0SuVwOJhE"
      />
    </div>
    <explanation-card />
  </div>
</template>
<style scoped>
div.ticket-system-panel {
  background-color: white;
}
</style>
<script>
import PanelTitle from "../molecules/PanelTitle.vue";
import SquareCard from "../molecules/SquareCard.vue";
import { useContext, useAsync } from "@nuxtjs/composition-api";
import ExplanationCard from "../molecules/ExplanationCard.vue";
export default {
  components: { SquareCard, PanelTitle, ExplanationCard },
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