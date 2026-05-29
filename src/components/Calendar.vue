<script setup>
import {ref, onMounted, onUnmounted} from 'vue';

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentDay = date.getDate();

const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // кол-во дней в месяце; (год, месяц + 1 (берём следующий месяц от текущего), день)
                                                                         // Нулевой день следующего месяца = последний день текущего.
const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const textMonth = monthNames[currentMonth]; // Месяц текстом вместо чисел

// Получаем день недели для 1-го числа месяца (0 - Воскресенье, 1 - Понедельник и т.д.)
let firstWeekDay = new Date(currentYear, currentMonth, 1).getDay();

/* let emptyCells; 

if (firstWeekDay === 0) {
    emptyCells = 6
} 
else { 
    emptyCells = firstWeekDay - 1
} */

// Создаем реактивную переменную для хранения времени
const currentTime = ref('')
let timer = null

// Функция для обновления времени
const updateTime = () => {
    const date = new Date ();
  // toLocaleTimeString автоматически делает формат ЧЧ:ММ:СС
    currentTime.value = date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

// Когда компонент появляется на экране
onMounted(() => {
  updateTime() // Вызываем сразу, чтобы не было пустой строки первую секунду
  timer = setInterval(updateTime, 1000) // Запускаем "тиканье" каждую 1000 мс (1 секунда)
})

// ОЧЕНЬ ВАЖНО: Когда компонент уничтожается (перешли на другую страницу),
// нужно очистить таймер, иначе он продолжит работать в фоне и вызовет утечку памяти.
onUnmounted(() => {
  clearInterval(timer)
})



//Дни недели для шапки календаря
  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  
</script>

<template>
    <div class = "calendar"> 
        <div class = "calendar-header"> 
            <p class = "timer"> {{ currentTime }} </p>
            <p class = "header-date"> {{ currentDay }} {{ textMonth }} {{ currentYear }} г. </p>
            
        </div>
        <div class = "calendar-body"> 
            <div v-for = "day in weekDays" :key = "day"> {{ day }} </div>
        </div>
        
       
    </div>


</template>

<style scoped>
    .calendar {
        width: 80%;
        height: 400px;
        background-color: rgb(43, 42, 42);
        border-color: rgb(40, 194, 40);   
    }

    .calendar-body {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        text-align: center;
        gap: 3px;
    }


</style>