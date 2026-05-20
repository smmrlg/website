<template>
        <div class="content-block"> 
            <h1> Основной блок контента для MainScreen.vue (test)</h1>

            <div class="title">
                <h1>{{ mainTitle }}</h1>
                <h2>{{ subTitle }}</h2>
            </div>
        <!-- Отложено до лучших времён -->
        </div>
</template>

 <script setup>
        const props = defineProps ({
            mainTitle: {
                type: String,
                required: true
            },
            subTitle: {
                type: String,
                required: true
            }
        })


</script>