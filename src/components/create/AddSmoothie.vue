<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text add-smoothie__header">Add new Smoothie Recipe</h2>
    <form @submit.prevent="addSmoothieRecipe">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div v-for="(smoothieIngredient, index) in smoothieIngredients" :key="index" class="add-smoothie__ingredient">
        <label for="smoothieIngredient">Ingredient: </label>
        <!-- v model is bound to the smoothieAingredients array below -->
        <input type="text" name="smoothieIngredient" v-model="smoothieIngredients[index]">
        <!-- Pass in the correct ingredient referencing from the v-for item being iterated -->
        <i class="material-icons delete" @click="deleteIngredient(smoothieIngredient)">delete</i>
      </div>
      <div class="field add-ingredient add-smoothie__ingredient-input">
        <label for="add-ingredient">Add an ingredient:</label>
        <!-- On tab click - call addIng func --- pushes new ing to array, displays next ing -->
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIngredient" v-model="tabbedNextIngredient">
        <!-- v-if is only running if feedback gets updated which === truthy cuz its a string -->
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
      </div>
      <div class="field center-align">
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import dataBase from '@/firebase/init';
import slugify from 'slugify';
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
      // Check if user has added a title
      if (this.title) {
        // reset feedback to null = don't shwow the err msg
        this.feedback = null;
        // Create slug with the title
        this.slug = slugify(this.title, {
          // similar to .join()
          replacement: '-',
          // Remove any of these special characters
          remove: /$_+~.()'"!-:@]/g,
          // make the slug lower case
          lower: true
        });
        dataBase
          // Look inside the collection names smoothies
          .collection('smoothies')
          // add these properties
          .add({
            title: this.title,
            ingredients: this.smoothieIngredients,
            slug: this.slug
          })
          // Once ingredients added, take user to home page
          .then(() => {
            this.$router.push({ path: '/' });
          })
          .catch(err => {
            console.log(err);
          });
        // If the title didn't exist, Show this feeback msg
      } else {
        this.feedback = 'You must enter a smoothie title';
      }
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
    },
    deleteIngredient(smoothieIngredient) {
      // true, ing stays - false, ing removed from array
      this.smoothieIngredients = this.smoothieIngredients.filter(ingredientItem => {
        // If ingredientItem being iterated is not equal to the item being clicked, it will stay
        // If the item being itereated is the same as the item being clicked, statement is false and item is removed
        return ingredientItem != smoothieIngredient;
      });
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
  &__ingredient {
    margin: 20px auto;
    position: relative;
    .delete {
      position: absolute;
      right: 0;
      bottom: 16px;
      color: #aaa;
      font-size: 1.4em;
      cursor: pointer;
    }
  }
}
</style>