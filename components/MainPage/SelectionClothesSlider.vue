<template>
  <div class="SelectionClothes__container__item">
    <div class="SelectionClothes__container__item__step">
      <slot name="step" />
    </div>
    <div class="dropdown">
      <div class="selected-item" @click="toggleDropdown">
        <p>
          <slot name="subtitle" /><br />
          {{ selectedItem || "Спортивный" }}
        </p>

        <img
          :class="{ transform: Transformimg, imgdropdown: imgdropdown }"
          src="../../public/image/components/SelectionClothes/Group 30.png"
          width="33px"
        />
      </div>
      <transition name="fade">
        <ul v-if="isDropdownOpen" class="dropdown-list">
          <li
            v-for="option in options"
            :key="option"
            @click="selectItem(option)"
          >
            {{ option }}
          </li>
        </ul>
      </transition>
    </div>
    <div class="slider-container">
      <div
        class="slider"
        :style="{ transform: 'translateX(' + -currentIndex * 100 + '%)' }"
      >
        <div v-for="(slide, index) in img" :key="index" class="slide">
          <img :src="slide.image" alt="Slide" />
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
<script setup>
const { img, options } = defineProps(["img", "options"]);
import { ref } from "vue";
const isDropdownOpen = ref(false);
const selectedItem = ref(null);
const Transformimg = ref(false);
const imgdropdown = ref(true);
const currentIndex = ref(0);

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
  Transformimg.value = !Transformimg.value;
  imgdropdown.value = !imgdropdown.value;
}
function selectItem(option) {
  selectedItem.value = option;
  isDropdownOpen.value = false;
  imgdropdown.value = !imgdropdown.value;
  Transformimg.value = !Transformimg.value;
}
function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % img.length;
}
function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + img.length) % img.length;
}
</script>
<style lang="scss"></style>
