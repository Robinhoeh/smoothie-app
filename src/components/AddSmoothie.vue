<template>
  <div class="add-smoothie container">
    <h2 class="cetner-align indigo-text">Add new Smoothie Recipe</h2>
    <form>
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient:</label>
        <input type="text" name="add-ingredient">
      </div>
      <div class="field center-align">
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'AddSmoothie',
  data() {
    return {
      title: null
    };
  }
};
</script>

<style lang="scss">
</style>