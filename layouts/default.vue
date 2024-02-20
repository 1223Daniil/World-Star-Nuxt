<script setup>
import { useCounterStore } from "../store/store";
const counter = useCounterStore();

const login = ref(false);
const register = ref(true);
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
    <AppHeader
      v-if="counter.$state.reg == false"
      @OpenLogin="OpenLogin()"
      @OpenRegister="OpenRegister()"
    />
    <AppHeaderLogin v-else />
    <div class="container">
      <slot />
    </div>
    <AppFooter />

    <LoginPopap @OpenRegister="OpenRegister()" v-if="login" />
    <RegisterPopap v-if="register" />
  </div>
</template>
<style lang="scss">
@use "~/assets/style/main.scss";
</style>
