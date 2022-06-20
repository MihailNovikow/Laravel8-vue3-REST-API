require('./bootstrap');

import { createApp } from "vue";
import router from './router/index';
import EquipmentIndex from './components/equipments/EquipmentIndex.vue';
import Search from './components/equipments/Search.vue'
const app = createApp({
    components: {
        EquipmentIndex,
        Search,
    },
}).use(router).mount('#app')
