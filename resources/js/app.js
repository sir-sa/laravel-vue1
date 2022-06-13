import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import router from './router';

import CompaniesIndex from '../components/companies/CompaniesIndex';


import {createApp} from "vue";

createApp(rootComponent, {
    components:{
        CompaniesIndex
    }
}).mount(rootContainer, '#app')

