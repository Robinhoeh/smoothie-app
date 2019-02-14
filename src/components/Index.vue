<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete__item" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="header indigo-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient, index) in smoothie.ingredients" :key="index" class="ingredient__item">
            <span class="chip">{{ ingredient }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import dataBase from '@/firebase/init';

export default {
  name: 'Index',
  data() {
    return {
      smoothies: []
    };
  },
  methods: {
    // Becuase we delete the item, we want the result to be false
    // if !True, item stays - if equal = false, item removed
    // check if the smoothie in .filter is !== to the id being clicked on first
    deleteSmoothie(id) {
      // Refernce the DB
      dataBase
        .collection('smoothies')
        .doc(id)
        //Delete from DB/Firebase
        .delete()
        .then(() => {
          // Sync up local data as well ie. front end
          // Update local smoothies array
          this.smoothies = this.smoothies.filter(smoothie => {
            // Check if smoothie.id is not same as smoothie passed in at top
            return smoothie.id !== id;
          });
        });
    }
  },
  // Data is pushed before Page displayed
  created() {
    // Reference data from DB firestore
    dataBase
      .collection('smoothies')
      .get()
      // Snapshot is state of arrays collection at that current time
      .then(snapshot => {
        snapshot.forEach(doc => {
          // retrieve and create smoothie from DB
          let smoothieFromFirebase = doc.data();
          // id Binds each induvidual smoothie
          smoothieFromFirebase.id = doc.id;
          // Push each smoothie from FB doc to local data array
          this.smoothies.push(smoothieFromFirebase);
        });
      });
  }
};
</script>

<style lang="scss">
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
  .header {
    font-size: 1.8em;
    text-align: center;
    margin-top: 0;
  }
  .ingredients {
    margin: 30px auto;
    .ingredient__item {
      display: inline-block;
    }
  }
  .delete__item {
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
    color: #aaa;
    font-size: 1.4ems;
  }
}
</style>