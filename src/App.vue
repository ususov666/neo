<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <div class="bg-gray-100 flex-grow mb-10">
      <Header />
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
img {
  width: 24px;
  height: 24px;
}

footer {
  bottom: 0;
}
</style>
