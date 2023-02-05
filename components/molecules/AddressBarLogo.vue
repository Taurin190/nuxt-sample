<template>
  <img
    class="address-bar-logo"
    alt="Sample CINEMAS"
    :src="image.path"
  />
</template>

<style>
.address-bar-logo {
  height: 45px;
  width: 210px;
}
</style>
<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "AddressBarLogo",
  props: {
    image_path: {
      type: String,
      default: "/address-bar-logo.png",
    },
  },
  setup(props) {
    const image = { path: props['image_path']};

    return { image };
  }
});
</script>
