<template>
  <div>
    <h2 class="mb-4">劇場サービス</h2>
    <v-row align="left">
      <v-col cols="6" v-for="service in services" :key="service.title">
        <square-card
          :title="service.title"
          :image_path="service.image_path"
          :to="service.to"
          :description="service.description"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { useContext, useAsync } from "@nuxtjs/composition-api";
import SquareCard from "../molecules/SquareCard.vue";
export default {
  components: { SquareCard },
  name: "TheaterServicePanel",
  setup() {
    const { app } = useContext();
    const banners = useAsync(async () => {
      const response = await app.$repositories("banner").get();
      console.log(response);
      return response.data;
    });

    return { banners };
  },
  data() {
    return {
      services: [
          {
              'title': 'シネマポイントカード',
              'image_path': '/creditcard_nonumber_black.png',
              'to': '',
              'description': '5回観たら1回無料！その他スペシャルシートが毎日特別価格でのご利用や会員のみの割引サービスなどお得な会員特典がいっぱい！'
          },
          {
              'title': 'コンセッションおすすめ商品',
              'image_path': '',
              'to': '',
              'description': ''
          },
          {
              'title': 'アシストサービス',
              'image_path': '',
              'to': '',
              'description': ''
          },
          {
              'title': 'ふれあいシネマ',
              'image_path': '',
              'to': '',
              'description': '小さなお子様の映画デビューを応援する「ふれあいシネマ」。'
          },
          {
              'title': '団体鑑賞',
              'image_path': '',
              'to': '',
              'description': '子ども会、学校、職場等々団体でご鑑賞をお考えの方のご希望にお応えします。 '
          }
      ],
    };
  },
};
</script>