<template>
  <v-footer :absolute="!fixed" app class="d-block">
    <v-row class="white">
      <v-container>
        <v-row>
          <v-col cols="12" class="d-flex">
            <address-bar-logo />
            <i-max-link />
          </v-col>
          <page-link-list />
        </v-row>
      </v-container>
    </v-row>
    <v-row class="grey">
      <v-container>
        <v-row>
          <company-link />
        </v-row>
      </v-container>
    </v-row>
    <v-row class="grey darken-4">
      <v-container>
        <v-row>
          <copy-write />
        </v-row>
      </v-container>
    </v-row>
  </v-footer>
</template>
<style scoped>
</style>
<script>
import AddressBarLogo from "~/components/molecules/AddressBarLogo.vue";
import CompanyLink from '../molecules/CompanyLink.vue';
import CopyWrite from '../molecules/CopyWrite.vue';
import IMaxLink from "../molecules/IMaxLink.vue";
import PageLinkList from "../molecules/PageLinkList.vue";
export default {
  name: "FooterPanel",
  components: { AddressBarLogo, IMaxLink, PageLinkList, CopyWrite, CompanyLink },
  data() {
    return {
      fixed: false
    }
  }
};
</script>