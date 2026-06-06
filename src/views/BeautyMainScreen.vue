<script setup>
import { ref } from "vue";
const isSidebarOpen = ref(false);
</script>

<template>
    <div class="screen-container">
        <div class="content-left">
            <h1>"Ifur Kavua"</h1>
            <p>Welcome!</p>
            <p>My name is Daria, I’m a sertified PMU artist in Israel.</p>
            <p>Natural lips&brows enhancement.</p>
            <p>Personal approach, safe healing, natural result.</p>
            <p>
                 ✨ I’ll guide you calmly and clearly — so you feel confident
                and know what’s best for you💫
            </p>
            <button @click="isSidebarOpen = true" class="menu-btn">
                Открыть меню
            </button>
        </div>
        <div :class="['sidebar', { 'sidebar-active': isSidebarOpen }]">
            <button @click="isSidebarOpen = false" class="close-btn">
                &times;
            </button>
            <nav class="sidebar-links">
                <a href="#">Услуги</a>
                <a href="#">Мастера</a>
                <a href="#">Контакты</a>
            </nav>
        </div>
    </div>
</template>

<style scoped>
@import "@/views/css/Beauty.css";
</style>