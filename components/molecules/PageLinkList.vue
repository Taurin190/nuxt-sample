<template>
  <v-col cols="12" class="d-flex footer-link">
    <v-col cols="4">
      <dl>
        <dd>
          <ul>
            <li v-for="link in page_links" :key="link.name">
              <cinema-link :to="link.to" class="footer-link">
                {{ link.name }}
              </cinema-link>
            </li>
          </ul>
        </dd>
      </dl>
    </v-col>
    <v-col cols="4">
      <dl>
        <dd>
          <ul>
            <li v-for="link in inquiry_links" :key="link.name">
              <cinema-link :to="link.to" class="footer-link">
                {{ link.name }}
              </cinema-link>
            </li>
          </ul>
        </dd>
      </dl>
    </v-col>
    <v-col cols="4">
      <dl>
        <dd>
          <ul>
            <li v-for="link in corporate_links" :key="link.name">
              <cinema-link :to="link.to" class="footer-link">
                {{ link.name }}
              </cinema-link>
            </li>
          </ul>
        </dd>
      </dl>
    </v-col>
  </v-col>
</template>
<style scoped>
dd {
  margin-left: 0px;
  border-left: 1px solid lightgray;
  margin-bottom: 10px;
}

div.footer-link {
  padding: 0;
}
</style>
<script>
import CinemaLink from "../atoms/CinemaLink.vue";
export default {
  components: { CinemaLink },
  name: "PageLinkList",
  props: {
    page_links: {
      type: Array,
      default: () => [
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
    corporate_links: {
      type: Array,
      default: () => [
        {
          name: "お問い合わせ",
          to: "/nowshowing",
        },
        {
          name: "よくあるご質問",
          to: "/comingsoon",
        },
      ],
    },
    inquiry_links: {
      type: Array,
      default: () => [
        {
          name: "採用情報",
          to: "/nowshowing",
        },
        {
          name: "109シネマズ経営理念",
          to: "/comingsoon",
        },
      ],
    },
  },
};
</script>