<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
        <router-link to="/">
          <span class="nav-title">Smoothie App</span>
        </router-link>
        <router-link to="/auth/sign-in">Sign in</router-link>
        <a href="" class="btn-floating btn-large halfway-fab pink">
          <router-link to='/add-smoothie'>
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.navbar nav {
  padding: 0 20px;
}
</style>