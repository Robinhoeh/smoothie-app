<template>
  <div class="edit-smoothie container">
    <!-- smoothie_slug refers to the route param given in index.js -->
    <h2>Edit a Smoothie {{ this.$route.params.smoothie_slug }}</h2>
  </div>
</template>
<script>
export default {
  name: 'EditSmoothie',
  data() {}
};
</script>

<style lang="scss">
</style>
