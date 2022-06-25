<template>
  <img
    class="address-bar-logo"
    alt="Sample CINEMAS"
    :src="image_path"
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
    image_path: {
      type: String,
      default: "/address-bar-logo.png",
    },
  }
};
</script>
