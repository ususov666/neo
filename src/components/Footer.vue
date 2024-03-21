<template>
  <footer class="flex justify-center items-center bg-gray-100">
    <div class="w-3/4 bg-white rounded-t-lg">
      <div class="flex justify-between">
        <div>
          <h2 class="text-xl font-bold uppercase ml-3">QPICK</h2>
        </div>
        <div class="flex gap-28">
          <div class="flex flex-col">
            <span>Избранное</span>
            <span>Корзина</span>
            <span>Контакты</span>
          </div>
          <div class="flex flex-col">
            <div class="mb-5">
              <span>Условия сервиса</span>
            </div>
            <div class="flex gap-5">
              <img src="/Lang.png" alt="lang" />
              <span>Рус</span>
              <span>Eng</span>
            </div>
          </div>
        </div>
        <div class="flex mt-3 mr-3 gap-5">
          <img src="/VK.svg" alt="vk" />
          <img src="/Telegram.svg" alt="tg" />
          <img src="/Whatsapp.svg" alt="wp" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
img {
  width: 24px;
  height: 24px;
}
</style>
