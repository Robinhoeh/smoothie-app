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
    let ref = dataBase.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.smoothie = doc.data();
        this.smoothie.id = doc.id;
      });
    });
  }
};
</script>

<style lang="scss">
</style>
