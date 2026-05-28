<script setup>
    import { ref } from 'vue'; // ref обязательно нужно импортировать.
    import LeadForm from '@/components/LeadForm.vue';
    import content from '@/data/ContentBlockData.json'

    const data = ref(content)
</script>

<template>
    <LeadForm/>

    <!-- Закомментированно до лучших времён-->
    <!--  <section class="main-content">  Объединяем логические блоки контента 
            <div class="full-name">
                <h1 class="name"> FirstName SecondName </h1>
                <h2 class="brief-description"> Secondary text. </h2>
            </div>
            
            <img src="https://picsum.photos/400/500?random=2" class="responsive-img"></img>
            
            <div class="description">  Текстовое описание 
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <button class="read-more"> Узнать больше </button>
        </section> -->

    <!-- <main class="feed">
        <ContentBlock
            v-for = "block in data"
            :key = "block.id"
            :mainTitle = "block.mainTitle"
            :subTitle = "block.subTitle" 
            :image = "block.image"
            :paragraphs="block.paragraphs" 
            :buttonTitle="block.buttonTitle"      
        /> 
        
            v-for = "block in data" - v-for - цикл во Vue. Цикл берёт массив data и заносит каждый элемент массива в переменную block (которая тут же и объявлена)
            :key = "block.id" - двоеточие - сокращение от v-bind:, двоеточие нужно чтобы показать Vue что мы хотим использовать JS код. :key необходим для Vue чтобы сборщик не запутался где какой элемент (поэтому необходимо каждому объекту присваивать уникальный id)
            :mainTitle = "block.mainTitle"  - block.{{name}} означает что мы обращаемся к конкретному свойству объекта которые сейчас лежит в переменной block.
        

        <section class="content" v-for="i in 5" :key="i">
            <img :src="`https://picsum.photos/400/500?random=${i+2}`" alt="Доп контент" class="responsive-img">
            <div class="description">
                <h2 class="title"> Example text {{ i }}</h2>
                <p> Example Text Example Text Example Text Example Text </p>
                <button class="read-more"> Узнать больше </button>
            </div>
        </section>
    </main> -->

</template>

<style src="./css/MainScreen.css" scoped> </style>