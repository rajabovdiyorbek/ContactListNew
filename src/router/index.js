import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateContact from '../components/view/CreateContact'
import ContactList from '../components/view/ContactList'
import EditContact from '../components/view/EditContact'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'contact-list', component: ContactList },
  { path: '/create', name: 'create-contact', component: CreateContact },
  { path: '/edit/:indx', name: 'edit-contact', component:  EditContact},
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
