import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateContact from '../components/CreateContact'
import ContactList from '../components/ContactList'
import EditContact from '../components/EditContact'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'contact-list', component: ContactList },
  { path: '/create', name: 'create-contact', component: CreateContact },
  { path: '/edit/:indx', name: 'edit-contact', component:  EditContact},
]

const router = new VueRouter({
  routes
})

export default router
