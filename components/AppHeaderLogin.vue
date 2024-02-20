<template>
  <header>
    <div class="container header__container">
      <div class="header__container__item">
        <div class="header__container__item__logo">
          <NuxtImg
            width="62"
            height="54"
            src="/image/components/Header/image 95 (Traced).png"
          />
          <div>
            <h1 style="color: #005bff" class="text-2xl font-black">
              World Stars
            </h1>
            <span>Мировые звёзды BRICS</span>
          </div>
        </div>
        <div class="input-container">
          <input placeholder="Что Будем Искать? " />
          <div class="magnifying-glass"></div>
        </div>
      </div>
      <div class="header__container__item">
        <span class="wallet">45 WS</span>
        <span>Виолетта</span>
        <NuxtImg width="50" src="/image/components/Header/Rectangle 5.png" />
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../assets/style/Header.scss";
.wallet {
  background-color: #9755fe;
  color: #fff;
  padding: 4px 8px;
  border-radius: 26px;
}
</style>
