import { createStore } from 'vuex';

const store = createStore({
  state: {
    cartItems: [],
    cartCount: 0, 
  },
  mutations: {
    addToCart(state, product) {
        const productWithImg = { ...product, img: product.imgUrl };
        state.cartItems.push(productWithImg);
        state.cartCount++
    },
    decreaseCount(state, itemId) {
      const item = state.cartItems.find(item => item.id === itemId);
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
    increaseCount(state, itemId) {
      const item = state.cartItems.find(item => item.id === itemId);
      if (item) {
        item.quantity++;
      }
    },
    removeFromCart(state, productId) {
      state.cartItems = state.cartItems.filter(item => item.id !== productId);
    },
  },
});

export default store;