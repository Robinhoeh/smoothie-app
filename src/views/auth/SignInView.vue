<template>
  <div class="sign-in-view container">
    <h2>Sign in View</h2>
    <sign-in></sign-in>
  </div>
</template>

<script>
import SignIn from '@/components/auth/signIn';

export default {
  name: 'SignInView',
  components: { SignIn },
  data() {
    return {};
  }
};
</script>

<style>
</style>
