<template>
  <div class="gallery__container">
    <div style="grid-area: 1 / 1 / 3 / 2" class="gallery__container__img">
      <img
        width="100%"
        height="100%"
        src="../../public/image/components/PhotoGallery/Rectangle 7034.png"
      />
    </div>
    <div style="grid-area: 1 / 2 / 3 / 3" class="gallery__container__img">
      <img
        width="100%"
        height="100%"
        src="../../public/image/components/PhotoGallery/Rectangle 7037.png"
      />
    </div>
    <div
      class="gallery__container__item"
      style="background: linear-gradient(to left, #1d2e38, #1e2f39)"
    >
      <span>Том Хэнкс</span>
      <div class="blur-square" style="background: #1d2e38"></div>
      <div>
        <img
          src="../../public/image/components/PhotoGallery/Rectangle 7033.png"
        />
      </div>
    </div>
    <div
      class="gallery__container__item"
      style="background: linear-gradient(to left, #868686, #8e9497)"
    >
      <span>Скала Джонсон</span>
      <div
        class="blur-square"
        style="background: linear-gradient(to left, #d2d4d3, #8b8f91)"
      ></div>
      <div>
        <img
          src="../../public/image/components/PhotoGallery/Rectangle 7033 (1).png"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../../assets/style/photogallery";
</style>
