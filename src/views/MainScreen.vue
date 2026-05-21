<script setup>
    import ContentBlock from '@/components/ContentBlock.vue';
    import { ref } from 'vue'; // ref обязательно нужно импортировать.

    const data = ref ([ // Объявляем реактивный массив data, ref() - функция Vue которая делает массив реактивным. Объявления массива стандартный JS синтаксис в квадратных скобках.  
        {              // Массив называется реактивным потому что если мы изменим данные, то Vue автоматически подстроится и отобразит нам новые данные.
            id: 1, // Уникальный идентификатор объекта. 
            mainTitle: 'Example mainTitle 1',
            subTitle: 'Example subTitle 1'
        },
        {
            id: 2,
            mainTitle: 'Example mainTitle 2',
            subTitle: 'Example subTitle 2'
        },
        {
            id: 3,
            mainTitle: 'Example mainTitle 3',
            image: 'https://picsum.photos/400/500?random=2'
        },
        {
            id: 4,
            mainTitle: 'Paragraphs demonstration',
            image: 'https://picsum.photos/400/500?random=5',
            paragraphs: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ],
            buttonTitle: 'Test Button'
        }
    ])
</script>

<template>
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
        <ContentBlock
            v-for = "block in data"
            :key = "block.id"
            :mainTitle = "block.mainTitle"
            :subTitle = "block.subTitle" 
            :image = "block.image"
            :paragraphs="block.paragraphs" 
            :buttonTitle="block.buttonTitle"      
        /> 
        <!-- 
            v-for = "block in data" - v-for - цикл во Vue. Цикл берёт массив data и заносит каждый элемент массива в переменную block (которая тут же и объявлена)
            :key = "block.id" - двоеточие - сокращение от v-bind:, двоеточие нужно чтобы показать Vue что мы хотим использовать JS код. :key необходим для Vue чтобы сборщик не запутался где какой элемент (поэтому необходимо каждому объекту присваивать уникальный id)
            :mainTitle = "block.mainTitle"  - block.{{name}} означает что мы обращаемся к конкретному свойству объекта которые сейчас лежит в переменной block.
        -->

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