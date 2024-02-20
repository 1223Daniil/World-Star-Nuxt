<script setup>
const login = ref(false);
const register = ref(false);
function OpenLogin() {
  login.value = true;
  register.value = false;
}
function OpenRegister() {
  register.value = true;
  login.value = false;
}
</script>
<template>
  <div>
    <AppHeader @OpenLogin="OpenLogin()" @OpenRegister="OpenRegister()" />
    <div class="container">
      <slot />
    </div>
    <AppFooter />

    <LoginPopap v-if="login" />
    <RegisterPopap v-if="register" />
  </div>
</template>
<style lang="scss">
@use "~/assets/style/main.scss";
</style>
