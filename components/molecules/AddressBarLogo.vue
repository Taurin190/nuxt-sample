<template>
  <img
    class="address-bar-logo"
    alt="Sample CINEMAS"
    :src="img_path"
  />
</template>

<style>
.address-bar-logo {
  height: 45px;
  width: 210px;
}
</style>
<script>
export default {
  name: "AddressBarLogo",
  props: {
    img_path: {
      type: String,
      default: "/address-bar-logo.png",
    }
  },
};
</script>
