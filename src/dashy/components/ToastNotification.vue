<template>
    <transition name="slide-up">
        <div class="toast" :class="type" v-if="show">
            <div class="toast-body">
                <div class="notification" :class="type">
                    <div class="cotent">
                        <p>{{ message }}</p>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
	name: "ToastNotification",
    props: {
        message: {
            type: String,
        },
        options: {
            type: Object,
        },
    },
	data() {
        return {
            show: false,
            type: "",
            timeout: 5000,
        }
    },

    methods: {
        setNotificationType: function() {
            console.log(this.options, this.message);
            if (this.options.type === 'success') {
                this.type = "is-success";
            } else if (this.options.type === 'error') {
                this.type = "is-danger";
            }
        },
    },

    mounted() {
        this.show = true;
    },

    watch: {
        show: function() {
            this.setNotificationType();
            if (this.show) {
                setTimeout(() => {
                    this.show = false;
                }, this.timeout);
            }
        }
    },
}
</script>

