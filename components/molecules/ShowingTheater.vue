<template>
  <ul>
    <li v-for="theater in theaters" :key="theater.name">{{ theater.name }}</li>
  </ul>
</template>
<script>
export default {
  name: "ShowingTheater",
  props: {
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