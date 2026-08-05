import { h, render, createApp } from 'vue'
import ToastNotification from '@/dashy/components/ToastNotification.vue';

export default {
    install: (app) => {
        const toast = (msg, options = {}) => {
            // 3. This was the 3rd variation that I learned and attempted
            const div = document.createElement("div");
            const instance = createApp({
                render: () => h(ToastNotification, {message: msg, options})
            });
            instance.mount(div);
            document.querySelector('body').appendChild(div);
        }

        app.config.globalProperties.$toast = toast;
    }
};