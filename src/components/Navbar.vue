<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content nav-wrapper">
        <router-link to="/">
          <span class="nav-title">{{appName}}</span>
        </router-link>
        <ul id="nav-mobile" class="right hide-on-small-only">
          <li v-for="(item, index) in navItems" :key="index" class="nav-item"> {{item.title}}</li>
        </ul>
        <a href="" class="btn-floating btn-large halfway-fab pink">
          <router-link to='/add-smoothie'>
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
      <div class="hidden-sm-and-down">
        <router-link :to="{ name: 'SignInView' }">SIGN IN</router-link>
        <router-link :to="{ name: 'Join' }"> JOIN </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      appName: 'Recipe helper',
      navItems: [{ title: 'Sign in' }, { title: 'Join' }]
    };
  }
};
</script>

<style lang="scss" scoped>
.navbar nav {
  padding: 0 20px;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-item {
    padding: 15px 10px;
  }
}
</style>