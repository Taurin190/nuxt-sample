<template>
  <div>
    <h2 class="mb-1">上映劇場</h2>
    <ul>
      <li v-for="theater in theaters" :key="theater.name">
        <cinema-link v-if="theater.active">
          {{ theater.name }}
        </cinema-link>
        <span v-else>{{ theater.name }}</span>
      </li>
    </ul>
  </div>
</template>
<style scoped>
h2 {
  font-size: 1em;
  margin-left: 12px;
  color: darkcyan;
}
li {
  list-style-type: none;
  font-size: 0.7em;
  margin-left: 8px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  padding-left: 5px;
}
li > span {
  color: lightgray;
}
</style>
<script>
import CinemaLink from "../atoms/CinemaLink.vue";
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "ShowingTheater",
  components: { CinemaLink },
  props: {
    theaters: {
      type: Array,
      default: () => [
        { name: "富谷", active: true },
        { name: "佐野", active: true },
        { name: "菖蒲", active: true },
        { name: "木場", active: true },
        { name: "二子玉川", active: true },
        { name: "グランベリーパーク", active: true },
        { name: "川崎", active: true },
        { name: "湘南", active: true },
        { name: "ムービル", active: true },
        { name: "名古屋", active: true },
        { name: "四日市", active: true },
        { name: "明和", active: true },
        { name: "大阪エキスポシティ", active: true },
        { name: "箕面", active: true },
        { name: "HAT神戸", active: true },
        { name: "広島", active: true },
        { name: "佐賀", active: true },
      ],
    },
  },
});
</script>