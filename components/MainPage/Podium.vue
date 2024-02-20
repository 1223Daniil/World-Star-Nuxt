<template>
  <div class="Podium" @click="playYouTubeVideo">
    <NuxtImg
      width="1380"
      height="681"
      src="/image/components/Podium/Rectangle 7066.png"
      v-if="!showVideo"
    />
    <NuxtImg
      v-if="!showVideo"
      class="Podium__play"
      src="/image/components/Podium/Shape.png"
    />
    <div v-if="showVideo" id="youtubePlayer">
      <iframe
        width="1380"
        height="681"
        :src="youtubeEmbedUrl"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showVideo: false,
    };
  },
  methods: {
    playYouTubeVideo() {
      this.showVideo = true;
    },
  },
  computed: {
    youtubeEmbedUrl() {
      return `https://www.youtube.com/embed/Z7Gl9F_O-cI`;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/pages/MainPage/Podium.scss";
</style>
