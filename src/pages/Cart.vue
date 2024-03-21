<template>
  <div class="flex flex-col w-3/4 ml-64 mt-10">
    <div class="flex">
      <div class="flex flex-col gap-3">
        <CartComponent
          v-for="item in cartItems"
          :key="item.id"
          :item="item"
          :title="item.title"
          :price="item.price"
          :addToCart="addToCart"
          @decrease-count="handleDecreaseCount"
          @increase-count="handleIncreaseCount"
        />
      </div>
      <div v-if="cartItems.length > 0" class="flex flex-col ml-96">
        <span class="rounded bg-white">Итого {{ getTotalPrice }}</span>
        <button class="bg-black text-white rounded">
          Перейти к оформлению
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import CartComponent from "@/components/CartComponent.vue";

const store = useStore();

const cartItems = computed(() => store.state.cartItems);

const addToCart = (product) => {
  store.commit("addToCart", product);
};

const getTotalPrice = computed(() => {
  return store.state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
});

const handleDecreaseCount = (item) => {
  store.commit("decreaseCount", item);
};

const handleIncreaseCount = (item) => {
  store.commit("increaseCount", item);
};
</script>

<style>
.count {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background: #ffce7f;
  border-radius: 40%;
  min-width: 30px;
  height: 30px;
}
</style>
