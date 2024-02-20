<template>
  <div class="SelectionClothes">
    <span class="SelectionClothes__title">Подбор одежды для своего стиля</span>
    <div class="SelectionClothes__container">
      <MainPageSelectionClothesSlider :img="slideone" :options="optionsone">
        <template v-slot:step>
          <NuxtImg
            width="39"
            height="31"
            src="/image/components/SelectionClothes/image 99 (Traced).png"
          />
          <span
            style="transform: rotate(-10deg); position: relative; bottom: 25px"
            >Шаг №1</span
          >
        </template>
        <template v-slot:subtitle>
          <span>Выбери стиль </span>
        </template>
      </MainPageSelectionClothesSlider>
      <MainPageSelectionClothesSlider :img="slidetwo" :options="optionstwo">
        <template v-slot:step>
          <span style="position: relative; bottom: 25px"> Результат</span>
          <NuxtImg
            width="50"
            height="40"
            src="/image/components/SelectionClothes/image 100 (Traced).png"
          />
        </template>
        <template v-slot:subtitle>
          <span>Выбери категорию</span>
        </template>
      </MainPageSelectionClothesSlider>
      <MainPageSelectionClothesSlider :img="slidetree" :options="optionstree">
        <template v-slot:step>
          <span style="position: relative; bottom: 15px"> Шаг №2</span>
          <NuxtImg
            width="39"
            height="45"
            src="/image/components/SelectionClothes/image 99 (Traced) (1).png"
          />
        </template>
        <template v-slot:subtitle>
          <span>Выбери звезду</span>
        </template>
      </MainPageSelectionClothesSlider>
    </div>
    <div class="SelectionClothes__button">
      <button>В корзину</button>
      <button>Подробнее</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      optionsone: ["Пляжный", "Деловой", "Минималистичный"],
      optionstwo: ["Спорт", "Одежда"],
      optionstree: ["Мбаппе", "Месси", "Роналду"],
      slideone: [
        { image: "/image/components/SelectionClothes/Rectangle 7042.png" },
        { image: "/image/components/SelectionClothes/Rectangle 7042 (2).png" },
        { image: "/image/components/SelectionClothes/Rectangle 7042 (1).png" },
      ],
      slidetwo: [
        { image: "/image/components/SelectionClothes/Rectangle 7042 (1).png" },
        { image: "/image/components/SelectionClothes/Rectangle 7042.png" },
        { image: "/image/components/SelectionClothes/Rectangle 7042 (2).png" },
      ],
      slidetree: [
        { image: "/image/components/SelectionClothes/Rectangle 7042 (2).png" },
        { image: "/image/components/SelectionClothes/Rectangle 7042 (1).png" },
        { image: "/image/components/SelectionClothes/Rectangle 7042.png" },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "../../assets/style/selectionclothes";
</style>
