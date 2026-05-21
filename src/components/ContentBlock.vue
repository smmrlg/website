<template>
        <section class="content-block"> 
            <div class="title">
                <h1> {{ mainTitle }} </h1> <!-- Двойные фигурные скобки обозначают что сюда подставляется значение которое мы передали из родительского компонента -->
                <h2 v-if="subTitle"> {{ subTitle }} </h2> <!-- v-if условие Vue, в данном случае, если subTitle не передается сверху, то мы его просто не отрисовываем. -->
            </div> 
            
            <img :src="image" class="responsive-img"> <!-- image потому что передаем строкой ссылку на картинку -->
            
            <div class="description"> 
                <p v-for="paragraph, index in paragraphs" :key="index"> {{ paragraph }} </p> <!-- paragraph - сам элемент массива, index - номер элемента, :key="index" необходим для Vue. -->
            </div>
            
            <button v-if="buttonTitle" class="read-more">{{ buttonTitle }}</button> <!-- Если не передаётся никакой buttonTitle, то кнопку не показываем. -->
        </section>
</template>

 <script setup>
        // Определяем какие данные компонент будет принимать снаружи 
        const props = defineProps ({ // Синтаксис: const props - объявляем переменную с именем proprs, defineProps - функция (макрос) Vue, которая позволяет дочернему компоненту объявлять и принимать данные из родительского компонента.
            mainTitle: {  
                type: String, // Тип. Если передать что-то другое, помимо строки, - вывалится ошибка. 
                required: true // Обозначаем что пропс обязателен для передачи в него данных сверху. 
            },
            subTitle: {
                type: String,
            },
            image: {
                type: String,
            },
            paragraphs: {
                type: Array, 
                default: () => [] // По законам Vue значение по умолчанию должно возвращаться через функцию, чтобы каждый массив был независим во избежание багов. 
                // () - вызов функции, => - return, [] - пустой массив. Этот код срабатывает в том случае если из родительского компонента не был передан никакой текст.
            },
            buttonTitle: {
                type: String,
            }
        })
</script>