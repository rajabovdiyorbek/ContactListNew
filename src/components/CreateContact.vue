<template>
    <form  class="container-lg mt-5">
        <h1>Создать новый контакт</h1>
        <div v-if="submit">
            <div class="mb-3">
                <label class="form-label">Введите Имя</label>
                <input v-model="name" type="text" class="form-control" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Введите Номер</label>
                <input v-model="number" type="number" class="form-control" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Введите Email</label>
                <input v-model="email" type="email" class="form-control" required>
            </div>
            <button class="btn btn-primary" @click.prevent="addContact" :disabled="this.name !== '' && this.number && this.email ? this.disabledButton = false : this.disabledButton">Создать</button>
        </div>
        <div v-else>
            <h3 class="text-success mt-5">Контакт успешно создан вернитесь к списку..</h3>
        </div>
    </form>
    
</template>

<script>
export default {
    name: "CreateContact",
    data(){
        return {
            contacts: [
                {name: 'Diyorbek', number: +998912831617, email: 'rajabov.diyorbek.it@gmail.com'},
            ],
            name: '',
            number: null,
            email: null,
            submit: true,
            disabledButton: true,
        }
    },
    methods: {
        addContact: function () {
            const newContact = {
                name: this.name,
                number: this.number,
                email: this.email
            }

            this.contacts.push(newContact)
            this.name = '',
            this.number = null,
            this.email = null,
            this.submit = false
            this.$emit('addContact', this.contacts)
        },
        disabled() {
            if (this.name !== '' && this.number !== '' && this.email !== '') {
                return this.disabledButton = false
            } else {
                return this.disabledButton = true
            }
        }
    },
    created() {
        this.submit = true
    },
}
</script>

<style>

</style>