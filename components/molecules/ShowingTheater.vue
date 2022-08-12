<template>
  <ul>
    <li v-for="theater in theaters" :key="theater.name">
      <cinema-link v-if="theater.active">
        {{ theater.name }}
      </cinema-link>
      <span v-else>{{ theater.name }}</span>
    </li>
  </ul>
</template>
<style scoped>
li {
  list-style-type: none;
  font-size: 0.8em;
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
import CinemaLink from '../atoms/CinemaLink.vue'
export default {
  name: "ShowingTheater",
  components: {CinemaLink},
  props: 
    {
    theaters: [
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
};
</script>