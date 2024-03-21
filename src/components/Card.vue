<template>
  <div
    class="relative flex flex-col border border-slate-100 rounded-xl p-8 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2 w-80 bg-white"
  >
    <img :src="imgUrl" class="w-40 ml-10" alt="head" />
    <div class="flex justify-between mt-5">
      <div class="flex flex-col gap-2">
        <p class="hover:bg-gray-100">{{ title }}</p>
        <div class="flex">
          <img
            src="https://i.pinimg.com/originals/e6/84/e5/e684e53863cc0e9c0e406133c5897fd9.png"
            alt="star"
            class="w-5 h-5 hover:bg-gray-100"
          />
          <p class="ml-3 hover:bg-gray-100">{{ star }}</p>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <span class="font-bold text-yellow-400">{{ price }} руб.</span>
        <span @click="addToCartHandler" class="font-bold">Купить</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  id: Number,
  title: String,
  imgUrl: String,
  price: Number,
  star: Number,
});

const addToCartHandler = () => {
  const product = {
    id: props.id,
    title: props.title,
    imgUrl: props.imgUrl,
    price: props.price,
    quantity: 1,
  };
  store.commit("addToCart", product);
};
</script>
