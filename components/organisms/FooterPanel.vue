<template>
  <v-footer :absolute="!fixed" app>
    <v-row class="white">
      <v-container>
        <v-row>
          <v-col cols="12" class="d-flex">
            <address-bar-logo />
            <i-max-link />
          </v-col>
          <div>
            <span>&copy; {{ new Date().getFullYear() }}</span>
          </div>
        </v-row>
      </v-container>
    </v-row>
  </v-footer>
</template>
<style scoped>
</style>
<script>
import AddressBarLogo from "~/components/molecules/AddressBarLogo.vue";
import IMaxLink from '../molecules/IMaxLink.vue';
export default {
  name: "FooterPanel",
  components: { AddressBarLogo, IMaxLink },
};
</script>