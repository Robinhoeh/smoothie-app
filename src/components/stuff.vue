<template>
  <div v-if="smoothie" class="edit-smoothie container z-depth-1">
    <h2 class="indigo-text center-align">Edit {{ smoothie.title }} Smoothie</h2>
    <form @submit.prevent="editSmoothie">
      <div class="field title">
        <label for="title">Smoothie title:</label>
        <input type="text" name="title" v-model="smoothie.title">
      </div>
      <div v-for="(ing, index) in smoothie.ingredients" class="field ingredient" :key="index">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="smoothie.ingredients[index]">
        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient (press tab to add):</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Update Smoothie</button>
      </div>
    </form>
  </div>
</template>