<template>
  <form class="container-lg mt-5" @submit.prevent="editContact">
    <h1>Изменить данные контакта</h1>
    <div v-if="submit">
      <div class="mb-3">
        <label class="form-label">Введите Имя</label>
        <input v-model="contact.name" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label"
          >Введите Номер
          <p class="text-danger">{{ errorNumText }}</p>
        </label>
        <input v-model="contact.number" type="number" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label"
          >Введите Email
          <p class="text-danger">{{ errorEmailText }}</p>
        </label>
        <input v-model="contact.email" type="email" class="form-control" />
      </div>
      <ul
        class="list-group list-group-horizontal d-flex justify-content-end mt-2"
      >
        <button class="btn btn-primary" type="submit">
          Сохранить Изменения
        </button>
        <router-link to="/">
          <button class="btn btn-danger ms-2" type="button">Отменить</button>
        </router-link>
      </ul>
    </div>
    <div v-else>
      <h3 class="text-success mt-5">
        Контакт успешно изменен вернитесь к списку..
      </h3>
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
      submit: true,
      errorNumText: "",
      errorEmailText: "",
    };
  },
  methods: {
    editContact: function () {
      const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
      for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].number == this.contact.number) {
          this.errorNumText = "Контакт с такимже номером уже существует";
          return;
        }
        if (contacts[i].email == this.contact.email) {
          this.errorEmailText = "Email уже используется";
          return;
        } else {
          this.errorNumText = "";
          this.errorEmailText = "";
        }
      }

      console.log(contacts, this.contact);
      contacts[Number(this.$route.params.indx)] = this.contact;
      localStorage.setItem("contacts", JSON.stringify(contacts));

      this.submit = false;
    },
  },
};
</script>

<style></style>
