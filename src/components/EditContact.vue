<template>
  <form class="container-lg mt-5" @submit.prevent="editContact">
    <h1>Изменить данные контакта</h1>
    <div>
      <div class="mb-3">
        <label class="form-label">Введите Имя</label>
        <input v-model="contact.name" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Введите Номер </label>
        <input v-model="contact.number" type="number" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Введите Email </label>
        <input v-model="contact.email" type="email" class="form-control" />
      </div>
      <ul
        class="list-group list-group-horizontal d-flex justify-content-end mt-2"
      >
        <router-link to="/">
          <button class="btn btn-primary" type="submit">
            Сохранить Изменения
          </button>
        </router-link>
        <router-link to="/">
          <button class="btn btn-danger ms-2" type="button">Отменить</button>
        </router-link>
      </ul>
    </div>
  </form>
</template>

<script>
export default {
  name: "EditContact",
  data() {
    return {
      id: this.$route.params.indx,
      contact: (JSON.parse(localStorage.getItem("contacts")) || []).find(
        (_, i) => this.$route.params.indx == i
      ),
    };
  },
  methods: {
    editContact: function () {
      const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
      contacts[Number(this.$route.params.indx)] = this.contact;
      localStorage.setItem("contacts", JSON.stringify(contacts));
    },
  },
};
</script>
