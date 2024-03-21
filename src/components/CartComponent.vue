<template>
  <div class="flex justify-between">
    <div
      class="rounded-lg relative flex flex-col border border-slate-100 p-8 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2 w-80 bg-white"
    >
      <img
        src="/public/Vector.svg"
        alt="vector"
        class="w-5 h-5 ml-60"
        @click="removeFromCart"
      />
      <div class="flex">
        <div class="flex flex-col relative">
          <img :src="item.imgUrl" alt="asdasd" class="w-20 h-20" />
          <div class="flex mt-10">
            <div class="count mr-3" @click="decreaseCount">-</div>
            <span>{{ item.quantity }}</span>
            <div class="count ml-3" @click="increaseCount">+</div>
          </div>
        </div>
        <div class="flex flex-col">
          <span>{{ item.title }}</span>
          <span>{{ item.price }} P</span>
        </div>
      </div>
      <span class="ml-40">{{ item.price * item.quantity }} P</span>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  item: Object,
});

const emit = defineEmits(["decrease-count", "increase-count"]);

const decreaseCount = () => {
  if (props.item.quantity > 0) {
    emit("decrease-count", props.item.id);
  }
};

const increaseCount = () => {
  emit("increase-count", props.item.id);
};

const removeFromCart = () => {
  store.commit("removeFromCart", props.item.id);
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
