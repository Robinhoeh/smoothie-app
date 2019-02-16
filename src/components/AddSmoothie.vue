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
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIngredient" v-model="tabbedNextIngredient">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
      </div>
      <div v-for="(smoothieIngredient, index) in smoothieIngredients" :key="index">
        <label for="smoothieIngredient">Ingredient: </label>
        <!-- v model is bound to the smoothieAingredients array below -->
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
      tabbedNextIngredient: null,
      smoothieIngredients: [],
      feedback: null
    };
  },
  methods: {
    addSmoothieRecipe() {
      console.log(this.title, this.ingredients);
    },
    //Push new ing to local array
    addIngredient() {
      // check to see if ing exists in input
      if (this.tabbedNextIngredient) {
        // push tabbedNextIngredient input to smoothieIng array
        this.smoothieIngredients.push(this.tabbedNextIngredient);
        //Set input to empty
        this.tabbedNextIngredient = null;
        //Reset feedback condition on when input has data again or else it stays
        this.feedback = null;
      } else {
        // If input is empty - set feeback condition
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