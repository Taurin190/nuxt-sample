<template>
  <div class="pointcard mt-3 py-2 px-4 rounded">
    <h3 class="mb-2">マイページ</h3>
    <v-select
      v-model="theaterSelected"
      :items="theaters"
      box
      chips
      label="劇場を選ぶ"
      outlined
    >
      <template slot="selection" slot-scope="data">
        <span class="selected">{{ data.item.name }}</span>
      </template>
      <template slot="item" slot-scope="data">
        <v-list-tile-content v-text="data.item.name" />
      </template>
    </v-select>
  </div>
</template>
<style scoped>
div.pointcard {
  background-color: whitesmoke;
}
v-list-tile-content {
  margin-left: 15px;
}
span.selected {
  margin-left: 15px;
}
</style>
<script>
export default {
  name: "LoginPageLink",
  data() {
    return {
      theaterSelected: [],
      theaters: [
        { header: "東北" },
        { name: "富谷", group: "東北" },
        { header: "関東" },
        { name: "佐野", group: "関東" },
        { name: "高崎", group: "関東" },
        { name: "菖蒲", group: "関東" },
        { name: "木場", group: "関東" },
        { name: "二子玉川", group: "関東" },
        { name: "グランベリーパーク", group: "関東" },
        { name: "港北", group: "関東" },
        { name: "川崎", group: "関東" },
        { name: "湘南", group: "関東" },
        { name: "ムービル", group: "関東" },
        { header: "東海" },
        { name: "名古屋", group: "東海" },
        { name: "四日市", group: "東海" },
        { name: "明和", group: "東海" },
        { header: "近畿" },
        { name: "大阪エキスポシティ", group: "近畿" },
        { name: "箕面", group: "近畿" },
        { name: "HAT神戸", group: "近畿" },
        { header: "中国" },
        { name: "広島", group: "中国" },
        { header: "九州" },
        { name: "佐賀", group: "九州" },
      ],
    };
  },
};
</script>