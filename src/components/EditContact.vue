<template>
    <form class="container-lg mt-5">
        <h1>Изменить данные контакта</h1>
        <div v-if="submit">
            <div class="mb-3">
                <label class="form-label">Введите Имя</label>
                <input v-model="contact.name" type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Введите Номер</label>
                <input v-model="contact.number" type="number" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Введите Email</label>
                <input v-model="contact.email" type="email" class="form-control">
            </div>
            <ul class="list-group list-group-horizontal d-flex justify-content-end mt-2">
                <button class="btn btn-primary" v-on:click="editContact">Сохранить Изменения</button>
                <router-link to="/">
                    <button class="btn btn-danger ms-2">Отменить</button>
                </router-link>
            </ul>
        </div>
        <div v-else>
            <h3 class="text-success mt-5">Контакт успешно изменен вернитесь к списку..</h3>
        </div>

    </form>
</template>

<script>
    export default {
    name: 'EditContact',
    props: {
        getedContacts: {
            type: Array
        }
    },
    data() {
        return {
            id: this.$route.params.indx,
            contact: {},
            submit: true
        }
    },
    created() {
        this.contact = { ... this.getedContacts[this.id] }
        console.log(this.contact);
        this.submit = true
    },
    methods: {
        editContact: function () {
            this.$emit('editedContact', this.contact)
            this.submit = false
        }
    }
}
</script>

<style>

</style>