<template>
  <v-col cols="4">
    <dl>
      <dd>
        <ul>
          <li v-for="link in links" :key="link.name">
            <nuxt-link :to="link.to">
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </dd>
    </dl>
  </v-col>
</template>
<style>
dd {
  margin-left: 0px;
  border-left: 1px solid lightgray;
  margin-bottom: 10px;
}
</style>
<script>
export default {
  name: "PageLinkList",
  props: {
    links: {
      type: Array,
      default: [
        {
          name: "上映中の作品",
          to: "/nowshowing",
        },
        {
          name: "公開予定作品",
          to: "/comingsoon",
        },
        {
          name: "イベント・キャンペーン",
          to: "/events",
        },
        {
          name: "サービス案内",
          to: "/service",
        },
        {
          name: "チケット購入・照会",
          to: "/tickets",
        },
      ],
    },
  },
};
</script>