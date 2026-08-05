<script setup>
defineProps(['img']);
</script>


<template>
    <div
        :style="'background-image: url('+ img +');'">
    </div>
</template>


