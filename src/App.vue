<template>
  <div id="app">
    <header-section></header-section>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderSection from "./components/HeaderSection.vue";

export default {
  components: { HeaderSection },
  comments: {
    "header-section": HeaderSection,
  },
};
</script>
