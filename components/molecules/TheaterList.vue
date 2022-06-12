<template>
  <v-col cols="12">
    <dl>
      <template v-for="(theater, index) in theaters">
        <dt :key="theater.index">
          {{ index }}
        </dt>
        <dd :key="theater.index">
          <ul>
            <li v-for="place in theater.list" :key="place.name">{{ place.name }}</li>
          </ul>
        </dd>
      </template>
    </dl>
  </v-col>
</template>
<style>
dt {
  float: left;
}
dd {
  margin-left: 80px;
}
ul {
    display: flex;
    flex-wrap: wrap;
}
li {
    min-width: 80px;
}
</style>
<script>
export default {
  name: "TheaterList",
  data() {
    return {
      theaters: {
        東北: {
          index: 1,
          list: [
            {
              name: "富谷",
              ename: "tomiya",
            },
          ],
        },
        関東: {
          index: 2,
          list: [
            {
              name: "佐野",
              ename: "sano",
            },
            {
              name: "高崎",
              ename: "takasaki",
            },
            {
              name: "菖蒲",
              ename: "shobu",
            },
            {
              name: "木場",
              ename: "kiba",
            },
            {
              name: "二子玉川",
              ename: "futakotamagawa",
            },
            {
              name: "グランベリーパーク",
              ename: "grandberrypark",
            },
            {
              name: "港北",
              ename: "kohoku",
            },
            {
              name: "川崎",
              ename: "kawasaki",
            },
            {
              name: "湘南",
              ename: "shonan",
            },
             {
              name: "ムービル",
              ename: "movil",
            },
          ],
        },
        東海: {
          index: 3,
          list: [
            {
              name: "名古屋",
              ename: "nagoya",  
            },
            {
              name: "四日市",
              ename: "yokkaichi",
            },
            {
              name: "明和",
              ename: "meiwa",
            },
          ],
        },
        近畿: {
          index: 4,
          list: [
            {
              name: "大阪エキスポシティ",
              ename: "tomiya",
            },
          ],
        },
        中国: {
          index: 5,
          list: [
            {
              name: "富谷",
              ename: "tomiya",
            },
          ],
        },
        九州: {
          index: 6,
          list: [
            {
              name: "富谷",
              ename: "tomiya",
            },
          ],
        },
      },
    };
  },
};
</script>