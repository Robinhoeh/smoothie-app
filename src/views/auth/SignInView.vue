<template>
  <div class="sign-in-view container">
    <sign-in></sign-in>
  </div>
</template>

<script>
import SignIn from '@/components/auth/SignIn';

export default {
  name: 'SignInView',
  component: { SignIn },
  data() {
    return {};
  }
};
</script>

<style>
</style>
