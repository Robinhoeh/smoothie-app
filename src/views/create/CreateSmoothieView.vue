<template>
  <div class="create-smoothie container">
    <AddSmoothie></AddSmoothie>
  </div>
</template>

<script>
import AddSmoothie from '@/components/create/AddSmoothie';

export default {
  name: 'CreateSmoothieView',
  components: { AddSmoothie },
  data() {
    return {};
  }
};
</script>

<style>
</style>
