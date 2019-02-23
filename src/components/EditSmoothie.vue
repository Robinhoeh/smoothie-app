<template>
  <div v-if="smoothie" class="edit-smoothie container">
    <h2>Edit a Smoothie {{ smoothie.title }} Smoothie</h2>
  </div>
</template>
<script>
import dataBase from '@/firebase/init';
export default {
  name: 'EditSmoothie',
  data() {
    return {
      smoothie: null
    };
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
</style>
