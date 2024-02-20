<template>
  <header>
    <div class="container header__container">
      <div class="header__container__item">
        <NuxtLink class="header__container__item__logo" to="/">
          <img
            width="62"
            height="54"
            src="../public/image/components/Header/image95Traced.png"
          />
          <div>
            <h1 style="color: #005bff" class="text-2xl font-black">
              World Stars
            </h1>
            <span>Мировые звёзды BRICS</span>
          </div>
        </NuxtLink>
        <div class="input-container">
          <input placeholder="Что Будем Искать? " />
          <div class="magnifying-glass"></div>
        </div>
      </div>
      <div class="header__container__item">
        <button
          style="background-color: #664eff"
          @click="$emit('OpenRegister')"
        >
          Регистрация
        </button>
        <button
          style="background: linear-gradient(#cdcdcd, #b1b1b1)"
          @click="$emit('OpenLogin')"
        >
          Войти
        </button>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../assets/style/Header.scss";
</style>
