<template>
<v-col cols="12">
  <dl>
    <template v-for="(theater, index) in theaters">
      <dt :key="theater.index">
        {{ index }}
      </dt>
      <dd :key="theater.index">
        {{ theater }}
      </dd>
    </template>
  </dl>
  </v-col>
</template>
<style>
dt{
  float: left;
}
dd{
  margin-left: 80px;
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
        },
        関東: {
          index: 2,
        },
        東海: {
          index: 3,
        },
        近畿: {
          index: 4,
        },
        中国: {
          index: 5,
        },
        九州: {
          index: 6,
        },
      },
    };
  },
};
</script>