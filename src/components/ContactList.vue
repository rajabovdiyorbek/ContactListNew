<template>
    <div class="container-lg mt-5">
        <h1>Список контактов</h1>
        <ol v-for="(contact, indx) in contacts" class="list-group list-group-numbered" :key="indx">
            <h4>...</h4>
            <li class="list-group-item"><strong>Имя:</strong>  {{ contact.name}}</li>
            <li class="list-group-item"><strong>Номер:</strong> {{ contact.number }}</li>
            <li class="list-group-item"><strong>Email:</strong> {{ contact.email}}</li>
            <ul class="list-group list-group-horizontal d-flex justify-content-end mt-2">
                <router-link :to="'/edit/' + indx">
                    <button class="btn btn-success" >Изменить</button>
                </router-link>
                <button class="btn btn-danger ms-2" @click="removeContact(indx)">Удалить</button>
            </ul>
            
        </ol>
    </div>
</template>

<script>
export default {
    name: 'ContactList',
    props: {
        getedContacts: {
            type: Array
        }
    },
    data() {
        return {
            contacts: []
        }
    },
    created() {
        this.contacts = [... this.getedContacts]
    },

    methods: {
        removeContact: function (indx) {
            this.contacts.splice(indx, 1)
        }
    }
}
</script>

<style>

</style>