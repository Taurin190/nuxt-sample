<template>
  <div>
    <tab-menu :active="5" />
    <cinema-page-title title="サービス案内" sub_title="SERVICE INFO" />
  </div>
</template>

<script>
import TabMenu from "~/components/organisms/TabMenu.vue";
import CinemaPageTitle from "~/components/atoms/CinemaPageTitle.vue";
export default {
  components: { TabMenu, CinemaPageTitle },
  name: "ServicePage",
};
</script>
