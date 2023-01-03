<template>
  <form class="container-lg mt-5" @submit.prevent>
    <h1>Создать новый контакт</h1>
    <div>
      <div class="mb-3">
        <label class="form-label">Введите Имя</label>
        <input v-model="name" type="text" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label"
          >Введите Номер
          <p class="text-danger">{{ errorNumText }}</p></label
        >
        <input v-model="number" type="number" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label"
          >Введите Email
          <p class="text-danger">{{ errorEmailText }}</p></label
        >
        <input v-model="email" type="email" class="form-control" required />
      </div>
      <button
        @click="addContact"
        class="btn btn-primary"
        :disabled="
          this.name !== '' && this.number !== '' && this.email !== ''
            ? (this.disabledButton = false)
            : (this.disabledButton = true)
        "
      >
        Создать
      </button>
    </div>
  </form>
</template>

<script>
import router from "@/router";

export default {
  name: "CreateContact",
  data() {
    return {
      name: "",
      number: null,
      email: null,
      disabledButton: true,
      errorNumText: "",
      errorEmailText: "",
    };
  },
  methods: {
    addContact: function () {
      const newContact = {
        name: this.name,
        number: this.number,
        email: this.email,
      };

      const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
      for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].number == newContact.number) {
          this.errorNumText = "Контакт с такимже номером уже существует";
          return;
        }
        if (contacts[i].email == newContact.email) {
          this.errorEmailText = "Email уже используется";
          return;
        } else {
          this.errorNumText = "";
          this.errorEmailText = "";
        }
      }
      contacts.push(newContact);

      localStorage.setItem("contacts", JSON.stringify(contacts));
      router.push("/");

      this.name = "";
      this.number = null;
      this.email = null;
    },
  },
};
</script>

<style></style>
