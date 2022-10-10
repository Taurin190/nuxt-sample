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
    <div v-for="card in cards" :key="card.index">
      <explanation-card :icon="card.icon" :title="card.title" />
    </div>
    <div class="px-2">
      <p>※毎日AM3:00〜AM6:00は定期メンテナンス中となりますので、予めご了承ください。</p>
    </div>
    <div class="py-5">
      <h3>お支払い方法</h3>
      <ul class="py-4 pl-0">
        <li>クレジットカード ※一括払いのみ</li>
        <li><nuxt-link to="/">ムビチケ</nuxt-link></li>
        <li><nuxt-link to="/">楽点ペイ（旧：楽点ID決済）</nuxt-link></li>
      </ul>
    </div>
    <v-row>
      <v-col cols="6">
        <cinema-link-button to="/">チケット購入方法 ></cinema-link-button>
      </v-col>
      <v-col cols="6">
        <cinema-link-button to="/">よくあるご質問 ></cinema-link-button>
      </v-col>
    </v-row>
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
import CinemaLinkButton from '../atoms/CinemaLinkButton.vue';
export default {
  components: { SquareCard, PanelTitle, ExplanationCard, CinemaLinkButton },
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
  data() {
    return {
      cards: [
        {
          icon: "mdi-run-fast",
          title: "窓口よりも早くお求めいただけます",
          description: "ご鑑賞希望日の3日前0時から上映直前20分前までインターネットで受け付け。"
        },
        {
          icon: "mdi-sofa-single",
          title: "全席ピンポイント座席取得",
          description: "お好きな座席をピンポイントで取得することが可能。"
        },
        {
          icon: "mdi-currency-usd-off",
          title: "手数料無料",
          description: "クレジットカードの決済手数料、チケット発行手数料などは一切ございませんので窓口と同じ料金でお求めいただけます。"
        }
      ]
    }
  }
};
</script>