import { createApp } from 'vue';
import { installPlugins } from '@/plugins';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './App.vue';
import '@/assets/_global-conf.scss';

installPlugins(
    // add element-plus icons
    Object.entries(ElementPlusIconsVue).reduce((prev, item) => {
        const [key, component] = item;
        return prev.component(key, component);
    }, createApp(App))
).mount('#app');
