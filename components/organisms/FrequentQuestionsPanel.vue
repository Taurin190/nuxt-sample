<template>
  <div>
    <h2 class="mb-4">よくあるご質問</h2>
    <v-row>
      <v-col cols="6">
        <square-card
          title="よくあるご質問"
          image_path="/banner_q_a.png"
          to="faq"
          description="お客様からお問い合わせの多いご質問とご回答を掲載しております。お問い合わせの前にぜひ一度ご確認ください。"
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
  name: "FrequentQuestionsPanel",
  setup() {
    const { app } = useContext();
    const banners = useAsync(async () => {
      const response = await app.$repositories("banner").get();
      console.log(response);
      return response.data;
    });

    return { banners };
  },
};
</script>