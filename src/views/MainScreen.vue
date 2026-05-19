<script setup>
import ContentBlock from '@/components/ContentBlock.vue';

</script>

<template>
        <ContentBlock/>

        <section class="main-content"> <!-- Объединяем логические блоки контента -->
            <div class="full-name">
                <h1 class="name"> FirstName SecondName </h1>
                <h2 class="brief-description"> Secondary text. </h2>
            </div>
            
            <img src="https://picsum.photos/400/500?random=2" class="responsive-img"></img>
            
            <div class="description"> <!-- Текстовое описание -->
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <button class="read-more"> Узнать больше </button>
        </section>

    <main class="feed">
        <section class="content"> <!-- Объединяем логические блоки контента -->
            <div class="description"> <!-- Текстовое описание - заголовок и сам текст -->
                <img src="https://picsum.photos/400/500?random=3" class="responsive-img"></img>
                <h2 class="title"> Where does it come from? </h2>
                <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
                <p> Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <button class="read-more"> Узнать больше </button>
            </div>

        </section>

        <section class="content"> <!-- Объединяем логические блоки контента -->
            <div class="description"> <!-- Текстовое описание - заголовок и сам текст -->
                <img src="https://picsum.photos/400/500?random=6" class="responsive-img"></img>
                <h2 class="title"> Why do we use it? </h2>
                <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                <p> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <button class="read-more"> Узнать больше </button>
            </div>
        </section>

        <section class="content" v-for="i in 5" :key="i">
            <img :src="`https://picsum.photos/400/500?random=${i+2}`" alt="Доп контент" class="responsive-img">
            <div class="description">
                <h2 class="title"> Example text {{ i }}</h2>
                <p> Example Text Example Text Example Text Example Text </p>
                <button class="read-more"> Узнать больше </button>
            </div>
        </section>
    </main>

</template>

<style scoped> 
        .feed {
            display: flex;
            flex-direction: column;
            gap: 20px; /* Расстояние между карточками */
            padding: 16px;
            background-color: #f8f9fa; /* Легкий фон страницы для контраста */
        }
        
        .full-name {
            display: flex;
            flex-direction: column;
            text-align: center;
            padding: 15px;
        }

        .description {
            display: flex;
            flex-direction: column;
            gap: 20px;

        }
        .main-content {
            display: flex;
            flex-direction: column;
            gap: 10px;
            
        }

        .read-more {
            /* Форма и отступы */
            padding: 12px 36px;
            border-radius: 30px; /* Делает кнопку овальной */
  
            /* Цвета */
            background-color: #f07bd8; /* Глубокий черный */
            color: black; 
            border: 2px solid #f07bd8;
  
            /* Текст */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 16px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
  
            /* Анимация и эффекты */
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .read-more:hover {
            background-color: #f07bd8;
            color: #111111;
            box-shadow: 0 0 15px rgba(255, 42, 133, 0.5); /* Розовое свечение */
            transform: translateY(-2px); /* Кнопка чуть приподнимается */
        }       

        .read-more:active {
            transform: translateY(1px); /* Эффект нажатия */
        }

        .full-name {
            background-color: #111111;
            color: white;
        }
        
        .main-pictures {
            display: flex;
            height: 100 px;
            


        }
</style>