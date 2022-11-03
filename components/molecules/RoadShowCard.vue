<template>
<v-card class="py-5 px-3 mb-3 text-center">
    <v-card-title class="py-5">
        2022<span class="publish-date">12/2</span>(金)
    </v-card-title>
    <span>ロードショー</span>

</v-card>
</template>
<style scoped>
span.publish-date {
    font-size: 52px;
}
</style>
<script>
import {
  defineComponent
} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "RoadShowCard",
  props: {
  },
});
</script>