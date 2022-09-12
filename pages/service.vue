<template>
  <div>
    <tab-menu :active="5" />
    <cinema-page-title
     title="サービス案内" 
     sub_title="SERVICE INFO" 
     class="mb-6"
     />
    <frequent-questions-panel />
  </div>
</template>

<script>
import TabMenu from "~/components/organisms/TabMenu.vue";
import CinemaPageTitle from "~/components/atoms/CinemaPageTitle.vue";
import FrequentQuestionsPanel from '~/components/organisms/FrequentQuestionsPanel.vue';
export default {
  components: { TabMenu, CinemaPageTitle, FrequentQuestionsPanel },
  name: "ServicePage",
};
</script>
