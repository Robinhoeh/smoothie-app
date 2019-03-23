<template>
  <div class="favorite-recipe container">
    <favorite-recipe></favorite-recipe>
  </div>
</template>

<script>
import FavoriteRecipe from '@/views/create/FavoriteRecipe';

export default {
  name: 'FavoriteRecipeView',
  components: { FavoriteRecipe },
  data() {
    return {};
  }
};
</script>

<style>
</style>
