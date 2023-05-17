import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const app = createApp(App);
app.use(store);
app.use(router);

app.config.globalProperties.$aos = AOS;

app.mount('#app');