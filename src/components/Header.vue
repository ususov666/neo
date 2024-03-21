<template>
  <header class="flex justify-between border-b border-slate-200 px-10 py-8">
    <div class="flex items-center gap-4">
      <router-link :to="{ name: 'Home' }">
        <div>
          <h2 class="text-xl font-bold uppercase">{{ getTitle }}</h2>
        </div>
      </router-link>
    </div>
    <ul class="flex items-center gap-10">
      <li
        class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black relative"
      >
        <img src="/heart.svg" alt="Favorites" />
        <div class="counter">2</div>
      </li>
      <li
        class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black mr-11"
      >
        <router-link :to="{ name: 'Cart' }" class="cart">
          <img src="/cart.svg" alt="art" />
          <div v-if="cartCount > 0" class="counter">{{ cartCount }}</div>
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script setup>
import store from "@/store/useBasket";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const getTitle = computed(() => {
  return route.meta?.title ? `QPICK - ${route.meta.title}` : "QPICK";
});

const cartCount = computed(() => store.state.cartCount);
</script>

<style>
.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background: #ffa542;
  border-radius: 40%;
  min-width: 15px;
  height: 15px;
  position: absolute;
  top: -10px;
  left: 70%;
  padding: 5px;
}
.cart {
  position: relative;
}
</style>
