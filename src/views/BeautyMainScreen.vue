<script setup>
import { ref, onMounted, onUnmounted, computed} from "vue";
import content from "@/data/TestData.json"; 
const isSidebarOpen = ref(false);
// const isScrolled = ref(false);

const items = content;
const currentContainerIndex = ref(0)
const step = 200; 

const handleScroll = () => { 
    let index = Math.floor(window.scrollY/step);
    currentContainerIndex.value = index; 
}

const currentItem = computed ( () => { 
    return items[currentContainerIndex.value]; 
})

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
            <div v-if="currentItem" :key="currentItem.id" :class="currentItem.class"> 
                <p> {{ currentItem.title }} </p>
                <p> {{ currentItem.text }} </p>
            </div>
      </Transition>

      


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

    <div class="scroll-spacer"></div>
</template>

<style scoped>
@import "@/views/css/Beauty.css";
.scroll-spacer { 
    height: 1500px;
   /* background-color: red; */
}
</style>