<template>
  <div class="Wardrobe">
    <div class="Wardrobe__title mb-12">
      <h3>ДОБАВЬ В СВОЙ ГАРДЕРОБ</h3>
      <button>Оформить заказ</button>
    </div>
    <div class="Wardrobe__content">
      <div class="Wardrobe__content__item">
        <NuxtImg
          width="330"
          height="280"
          style="border-radius: 20px"
          src="/image/components/SelectionClothes/Rectangle 7042 (1).png"
        />
        <p class="Wardrobe__content__item__price">
          <span>1 600 ₽</span
          ><span
            style="
              color: #aeaeae;
              text-decoration: line-through;
              font-size: 14px;
            "
            >1 600 ₽</span
          >
          <span>100 WS</span>
        </p>
        <p class="Wardrobe__content__item__desciption">
          Спортивный костюм, Descente цвет синий
        </p>
      </div>
      <div class="Wardrobe__content__item">
        <span class="Wardrobe__content__item__nocard__title">Нет товара</span>
        <span class="Wardrobe__content__item__nocard__description"
          >Добавьте товар в форме подбора товара выше</span
        >
      </div>
      <div class="Wardrobe__content__item">
        <span class="Wardrobe__content__item__nocard__title">Нет товара</span>
        <span class="Wardrobe__content__item__nocard__description"
          >Добавьте товар в форме подбора товара выше</span
        >
      </div>
      <div class="Wardrobe__content__item">
        <span class="Wardrobe__content__item__nocard__title">Нет товара</span>
        <span class="Wardrobe__content__item__nocard__description"
          >Добавьте товар в форме подбора товара выше</span
        >
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@import "../../assets/style/mainpage/wardrobe";
</style>
