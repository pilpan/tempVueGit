import {createRouter, createWebHistory} from 'vue-router'
import MainPage from '../view/MainPageView.vue'
import FormPage from '../view/FormPageView.vue'
import ButtonPage from '../view/ButtonPageView.vue'
import NewPage from '../view/NewPageView.vue'


const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/form',
            name: 'FormPage',
            component: FormPage
        },
        {
            path: '/button',
            name: 'ButtonPage',
            component: ButtonPage
        },
        {
            path: '/newPage',
            name: 'newPage',
            component: NewPage
        }
    ],
    history: createWebHistory()
});



export default router;