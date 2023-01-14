<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue';

</script>

<template>
  <RouterView :style="viewStyle" />
  <Footer id="footer" class="footer" />
</template>

<style scoped>
.footer {
  padding :  10px;
  background-color: rgb(24, 24, 20);
}

p {
  color: aliceblue;
}
</style>
