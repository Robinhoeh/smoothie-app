<template>
  <div id="app">
    <Navbar></Navbar>
    <index></index>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Index from '@/components/Index.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Index
  }
};
</script>

<style>
</style>
