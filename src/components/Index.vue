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
export default {
  name: 'Index',
  data() {
    return {
      smoothies: [
        { title: 'Ninja Brew', slug: 'ninja-brew', ingredients: ['banana', 'coffee', 'coco milk'], id: '1' },
        { title: 'Morning Mood', slug: 'morning-mood', ingredients: ['Mango', 'coconut', 'pineapple juice'], id: '2' }
      ]
    };
  },
  methods: {
    // Becuase we delete the item, we want the result to be false
    // !== True, item stays - is equal === false, item removed
    // check if the smoothie in .filter is !== to the id being clicked on first
    deleteSmoothie(id) {
      this.smoothies = this.smoothies.filter(smoothie => {
        return smoothie.id !== id;
      });
    }
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