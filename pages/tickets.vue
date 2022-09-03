<template>
  <div>
    <tab-menu :active="6" />
    <cinema-page-title title="チケット購入・照会" sub_title="ONLINE TICKETS" />
  </div>
</template>

<script>
import TabMenu from "~/components/organisms/TabMenu.vue";
import CinemaPageTitle from "~/components/atoms/CinemaPageTitle.vue";
export default {
  components: { TabMenu, CinemaPageTitle },
  name: "TicketsPage",
};
</script>
