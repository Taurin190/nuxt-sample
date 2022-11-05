<template>
  <div class="movie-credit-panel py-5 mb-5 px-4 rounded">
    <v-row>
      <v-col cols="12">
        <panel-title
          :to="panel_title.to"
          :icon="panel_title.icon"
          :title="panel_title.title"
          :etitle="panel_title.etitle"
          :list_link="false"
        />
      </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            {{ movie_introduction }}
        </v-col>        
    </v-row>
  </div>
</template>
<style scoped>
div.movie-credit-panel {
  background-color: white;
}
</style>
<script>
import PanelTitle from "../molecules/PanelTitle.vue";
import {
  defineComponent
} from "@nuxtjs/composition-api";

export default defineComponent({
  components: { PanelTitle },
  name: "MovieIntroductionPanel",
  setup() {
    const panel_title = {
      to: "/",
      icon: "mdi-movie-open",
      title: "イントロダクション",
      etitle: "INTRODUCTION",
    };
    
    const movie_introduction = "マルベルコミック原作「キャプテン・インド」シリーズの第3作。マルベルヒーローが集結した「アーベンジャー　エイジ・オブ・ウルトロン」後の物語となり、キャプテン・インドとアイアン男という「アベンジャーズ」を代表する2人のヒーローの対立と友情を描く。";
    return { panel_title, movie_introduction };
  },
});
</script>