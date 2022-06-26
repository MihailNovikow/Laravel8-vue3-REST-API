require('./bootstrap');
import store from './store/index';
import { createApp } from "vue";
import router from './router/index';
import EquipmentIndex from './components/equipments/EquipmentIndex.vue';
import SearchBar from './components/equipments/SearchBar.vue';
import Equipment from './components/equipments/Equipment.vue';
import Equipments from './components/equipments/Equipments.vue'
const app = createApp({
    components: {
        EquipmentIndex,
        Searchbar,
        Equipments,
        Equipment
    },
}).use(router).mount('#app')
