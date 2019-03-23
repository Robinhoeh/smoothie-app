<template>
  <div id="app">
    <Navbar></Navbar>
    <header></header>
    <transition
      name="trasnitionName"
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

// Make transition dynmaic
const DEFAULT_TRANSITION = 'fade';

export default {
  name: 'app',
  data() {
    return {
      prevHeight: 0,
      transitionName: DEFAULT_TRANSITION
    };
  },
  //Runs before every route change
  created() {
    // check if to or from page has meta transitionname proprty
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;
      // If yes, we use 'slide'
      if (transitionName === 'slide') {
        // depending if we go forward or backward, left or right slide
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION;

      next();
    });
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

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
