<template>
  <div id="app">
    <header-section></header-section>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import HeaderSection from "./components/HeaderSection.vue";

export default {
  components: { HeaderSection },
  comments: {
    "header-section": HeaderSection,
  },
  // data() {
  //   return {
  //     getedContacts: [],
  //   };
  // },
  // methods: {
  //   onContact: function (data) {
  //     console.log("data from create contact", data);
  //     this.getedContacts = [...data];
  //   },
  //   editedContact: function (editedContact) {
  //     this.getedContacts.push(editedContact);
  //   },
  // },
};
</script>
