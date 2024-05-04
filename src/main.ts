import { createApp } from 'vue';
import { installPlugins } from '@/plugins';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './App.vue';
import '@/assets/_global-conf.scss';

// Vue app
const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

// mount app
installPlugins(app).mount('#app');
