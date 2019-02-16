<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text add-smoothie__header">Add new Smoothie Recipe</h2>
    <form @submit.prevent="addSmoothieRecipe">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field add-ingredient add-smoothie__ingredient-input">
        <label for="add-ingredient">Add an ingredient:</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIngredient" v-model="nextIngredient">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
      </div>
      <div v-for="(smoothieIngredient, index) in smoothieIngredients" :key="index">
        <label for="smoothieIngredient">Ingredient: </label>
        <input type="text" name="smoothieIngredient" v-model="smoothieIngredients[index]">
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
      title: null,
      nextIngredient: null,
      smoothieIngredients: [],
      feedback: null
    };
  },
  methods: {
    addSmoothieRecipe() {
      console.log(this.title, this.ingredients);
    },
    addIngredient() {
      if (this.nextIngredient) {
        this.smoothieIngredients.push(this.nextIngredient);
        this.nextIngredient = null;
        this.feedback = null;
      } else {
        this.feedback = 'Please enter an item to add an ingredient';
      }
    }
  }
};
</script>

<style lang="scss">
.add-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
  &__header {
    font-size: 2em;
    margin: 20px auto;
  }
  &__ingredient-input {
    margin: 20px auto;
  }
}
</style>