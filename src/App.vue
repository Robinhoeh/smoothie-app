<template>
  <div id="app">
    <Navbar></Navbar>
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter">
      <router-view></router-view>
    </transition>
    <hr>
    <footer class="container">
      <p>Made with 🥥's by &copy; Robin</p>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'app',
  data() {
    return {
      prevHeight: 0
    };
  },
  methods: {
    //pass current page el
    beforeLeave(el) {
      //save height of current page for later
      this.prevHeight = getComputedStyle(el).height;
    },
    // triggers the transiton
    enter(el) {
      //Get height of new page
      const { height } = getComputedStyle(el);
      //set height of new page to current page
      el.style.height = this.prevHeight;
      //set height of new page to original height again
      setTimeout(() => {
        el.style.height = height;
      });
    },
    //height is set to auto
    //incase new content rendered, height adjusts automatically
    afterEnter(el) {
      el.style.height = 'auto';
    }
  },
  components: {
    Navbar
  }
};
</script>

<style  lang="scss">
// Page fades in
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.6s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
