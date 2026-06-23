<script setup>
import { ref, onMounted, onUnmounted} from "vue";
const isSidebarOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => { 
    if (window.scrollY > 50) { 
        isScrolled.value = true; 
    }
    else { 
        isScrolled.value = false; 
    }
}

onMounted( () => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted( () => {
    window.removeEventListener('scroll', handleScroll);
}); 


</script>

<template>
    <div class="screen-container">

      <Transition name="fade" mode="out-in">  
            <div v-if="!isScrolled" class="BMW"> 
                <p> What is Lorem Ipsum? Div container 1</p>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div> 
        
            <div v-else class="Ford"> 
                <p> Why do we use it? Div container 2</p>
                <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
      </Transition>

        <!--<div v-if="isScrolled" class="Audi"> 
            <p> Where does it come from? Div container 3</p>
            <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
        </div>  -->

        <div class="content-left">
            <h1>"Ifur Kavua"</h1>
            <p>Welcome!</p>
            <p>My name is Daria, I’m a sertified PMU artist in Israel.</p>
            <p>Natural lips&brows enhancement.</p>
            <p>Personal approach, safe healing, natural result.</p>
            <p>
                ✨ I’ll guide you calmly and clearly —so you feel confident
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