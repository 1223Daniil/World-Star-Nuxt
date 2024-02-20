<template>
  <div class="slider__container">
    <div class="slider-container">
      <div
        class="slider"
        :style="{ transform: 'translateX(' + -currentIndex * 100 + '%)' }"
      >
        <div v-for="(slide, index) in slides" :key="index" class="slide">
          <div>
            <h2 class="text-3xl">{{ slide.text }}</h2>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </div>
      <button @click="prevSlide" class="slider-button prevbt">
        <Icon
          name="flowbite:angle-left-outline"
          style="color: white"
          size="25px"
        />
      </button>
      <button @click="nextSlide" class="slider-button">
        <Icon
          name="flowbite:angle-right-outline"
          style="color: white"
          size="25px"
        />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      slides: [
        {
          text: "Подбирай одежду, создай свой  звездный стиль!",
          description: "Вместе с World Stars",
        },
        { text: "What is Lorem Ipsum?", description: "Lorem Ipsum is simply" },
        {
          text: "Why do we use it?",
          description: "long established fact that a reader",
        },
        // Добавьте дополнительные слайды по необходимости
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/mainslider";
</style>
