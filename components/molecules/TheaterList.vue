<template>
  <v-col cols="12">
    <dl>
      <template v-for="(theater, index) in theaters">
        <dt :key="theater.index">
          {{ index }}
        </dt>
        <dd :key="theater.index">
          <ul class="theater_list">
            <li v-for="place in theater.list" :key="place.name">
              <nuxt-link :to="place.to">
                {{ place.name }}
              </nuxt-link>
            </li>
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
  margin-left: 60px;
  border-left: 1px solid white;
  margin-bottom: 10px;
}
ul.theater_list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 5px;
}
li {
  min-width: 40px;
  margin-left: 30px;
  margin-bottom: 5px;
}
li > a {
  text-decoration: none;
}
li > a:link {
  color: white;
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
              to: "/theater/tomiya",
            },
          ],
        },
        関東: {
          index: 2,
          list: [
            {
              name: "佐野",
              ename: "sano",
              to: "/theater/sano",
            },
            {
              name: "高崎",
              ename: "takasaki",
              to: "/theater/takasaki",
            },
            {
              name: "菖蒲",
              ename: "shobu",
              to: "/theater/shobu",
            },
            {
              name: "木場",
              ename: "kiba",
              to: "/theater/kiba",
            },
            {
              name: "二子玉川",
              ename: "futakotamagawa",
              to: "/theater/futakotamagawa",
            },
            {
              name: "グランベリーパーク",
              ename: "grandberrypark",
              to: "/theater/grandberrypark",
            },
            {
              name: "港北",
              ename: "kohoku",
              to: "/theater/kohoku",
            },
            {
              name: "川崎",
              ename: "kawasaki",
              to: "/theater/kawasaki",
            },
            {
              name: "湘南",
              ename: "shonan",
              to: "/theater/shonan",
            },
            {
              name: "ムービル",
              ename: "movil",
              to: "/theater/movil",
            },
          ],
        },
        東海: {
          index: 3,
          list: [
            {
              name: "名古屋",
              ename: "nagoya",
              to: "/theater/nagoya",
            },
            {
              name: "四日市",
              ename: "yokkaichi",
              to: "/theater/yokkaichi",
            },
            {
              name: "明和",
              ename: "meiwa",
              to: "/theater/meiwa",
            },
          ],
        },
        近畿: {
          index: 4,
          list: [
            {
              name: "大阪エキスポシティ",
              ename: "osaka-expocity",
              to: "/theater/osaka-expocity",
            },
            {
              name: "箕面",
              ename: "minoh",
              to: "/theater/minoh",
            },
            {
              name: "HAT神戸",
              ename: "hatkobe",
              to: "/theater/hatkobe",
            },
          ],
        },
        中国: {
          index: 5,
          list: [
            {
              name: "広島",
              ename: "hiroshima",
              to: "/theater/hiroshima",
            },
          ],
        },
        九州: {
          index: 6,
          list: [
            {
              name: "佐賀",
              ename: "saga",
              to: "/theater/saga",
            },
          ],
        },
      },
    };
  },
};
</script>