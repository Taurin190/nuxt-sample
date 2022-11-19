<template>
<div class="card-tile py-5 mb-5 px-4 rounded">
    <slot></slot>
</div>
</template>
<style scoped>
div.card-tile {
  background-color: white;
}
</style>
<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "CardTile"
});
</script>
