<template>
  <div v-if="smoothie" class="edit-smoothie container">
    <h2>Edit {{ smoothie.title }} Smoothie</h2>
    <h4>
      <router-link to="/edit-smoothie/:smoothie_slug/create/favorite-recipe">Favorite Recipes</router-link>
    </h4>
    <form @submit.prevent="editSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="smoothie.title">
      </div>
      <div v-for="(smoothieIngredient, index) in smoothie.ingredients" :key="index" class="edit-smoothie__ingredient">
        <label for="smoothieIngredient">Ingredient: </label>
        <!-- smoothie.ingredients has to have the same structure as the firestore DB -->
        <input type="text" name="smoothieIngredient" v-model="smoothie.ingredients[index]">
        <i class="material-icons delete" @click="deleteIngredient(smoothieIngredient)">delete</i>
      </div>
      <div class="field add-ingredient add-smoothie__ingredient-input">
        <label for="add-ingredient">Add an ingredient: (Press tab to add)</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIngredient" v-model="tabbedNextIngredient">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
      </div>
      <div class="field center-align">
        <button class="btn pink">Update Smoothie</button>
      </div>
    </form>
  </div>
</template>
<script>
import dataBase from '@/firebase/init';
import slugify from 'slugify';
export default {
  name: 'EditSmoothie',
  data() {
    return {
      smoothie: null,
      tabbedNextIngredient: null,
      feedback: null,
      slug: null
    };
  },
  methods: {
    editSmoothie() {
      // Add smoothie. becuase all of the data is being store originally on the smoothie object
      if (this.smoothie.title) {
        this.feedback = null;
        this.smoothie.slug = slugify(this.smoothie.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        dataBase
          .collection('smoothies')
          // .doc() grabs a single document/record - auto gen ID by firestore
          // Below in the created phase, the id was set to the smoothie object
          // NOW - we have access to that id by firestore
          .doc(this.smoothie.id)
          .update({
            title: this.smoothie.title,
            slug: this.smoothie.slug,
            ingredients: this.smoothie.ingredients
          })
          .then(() => {
            // Forward user to the desired route after they hit tab
            this.$router.push({ name: 'Index' });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.feedback = 'You must enter a smoothie title';
      }
    },
    addIngredient() {
      // check to see if ing exists in input
      if (this.tabbedNextIngredient) {
        // push tabbedNextIngredient data to smoothie data object
        this.smoothie.ingredients.push(this.tabbedNextIngredient);
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
      this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredientItem => {
        // If ingredientItem being iterated is not equal to the item being clicked, it will stay
        // If the item being itereated is the same as the item being clicked, statement is false and item is removed
        return ingredientItem != smoothieIngredient;
      });
    }
  },
  // Component created but not displayed yet
  created() {
    // store reference to document
    // Query Db for a document with a matching slug
    let refToDb = dataBase.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug);
    // Get current snapshot from DB
    refToDb.get().then(snapshot => {
      // Loop through the reference to find current snapshot
      snapshot.forEach(doc => {
        // Update the smoothie data object
        this.smoothie = doc.data();
        // Create smoothie.id and attach id given by Firestore
        this.smoothie.id = doc.id;
      });
    });
  }
};
</script>

<style lang="scss">
.edit-smoothie {
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
