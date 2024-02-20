<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
// useHead({
//   title: "My App",
//   meta: [{ name: "description", content: "My amazing site." }],
//   htmlAttrs: {
//     class: "light-mode",
//   },
// });

// For Nuxt 3
definePageMeta({
  colorMode: "light",
});
</script>
