import Vue from 'vue';
import VueMaterial from 'vue-material';
import './worker.js';

/**
 * Styles
 */
import 'vue-material/dist/vue-material.css';
import '../node_modules/font-roboto/dist/styles/roboto.css';
import 'webpack-md-icons';

/**
 * Activate vue-material
 */
Vue.use(VueMaterial);

/**
 * Set default theme
 */
Vue.material.registerTheme('default', {primary: 'blue'})

/**
 * Import application files
 */
import Todos from './components/todos.vue'

/**
 * Initialize vue
 */
new Vue({
    el: '#app',
    components: {
        'todos': Todos
    }
});
