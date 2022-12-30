<template>
  <div id="app">
    <header-section></header-section>
    <router-view @editedContact="editedContact" @addContact="onContact" :getedContacts="getedContacts"></router-view>
  </div>
</template>


<script>
import HeaderSection from './components/HeaderSection.vue'

export default {
  components: { HeaderSection },
  comments: {
    'header-section' : HeaderSection,
  },
  data() {
    return {
      getedContacts: []
    }
  },
  methods: {
    onContact:function(data){
      console.log('data from create contact', data);
        this.getedContacts = [...data]
    },
    editedContact: function (editedContact) {
      console.log('edited contact', editedContact);
      this.getedContacts.push(editedContact)
    }
  }
}
</script>
