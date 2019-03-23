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
      <span class="btn-floating btn-large halfway-fab pink">
        <router-link :to="{ name: 'EditSmoothie', params: {smoothie_slug: smoothie.slug } }">
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
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
    // check if the smoothie in .filter is !== to the id being clicked on first
    deleteSmoothie(id) {
      // Refernce the DB
      dataBase
        .collection('smoothies')
        .doc(id)
        .delete()
        .then(() => {
          this.smoothies = this.smoothies.filter(smoothie => {
            return smoothie.id !== id;
          });
        });
    }
  },
  // Data is pushed before Page displayed
  created() {
    // Reference data from DB firestore
    dataBase
      //smoothies is the string defined by context in firestore
      .collection('smoothies')
      //.get() returns a promise
      .get()
      // Snapshot is state of arrays collection at that current time
      .then(snapshot => {
        snapshot.forEach(doc => {
          // retrieve and create smoothie from DB
          let smoothieFromFirebase = doc.data();
          // id Binds each induvidual smoothie
          // id is randomized ID from firestore doc object - assigned to each smoothie
          smoothieFromFirebase.id = doc.id;
          // Push each smoothie from FB doc to LOCAL data array
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
  margin-bottom: 70px;
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