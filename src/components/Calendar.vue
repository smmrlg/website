<script setup>
const date = new Date();

const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentDay = date.getDate();
const currentTime = date.getTime();

const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // кол-во дней в месяце; (год, месяц + 1 (берём следующий месяц от текущего), день)
                                                                // Нулевой день следующего месяца = последний день текущего.

const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const textMonth = monthNames[currentMonth]; // Месяц текстом вместо чисел

// Получаем день недели для 1-го числа месяца (0 - Воскресенье, 1 - Понедельник и т.д.)
let firstWeekDay = new Date(currentYear, currentMonth, 1).getDay();

let emptyCells; 

if (firstWeekDay === 0) {
    emptyCells = 6
} 
else { 
    emptyCells = firstWeekDay - 1
}

// Дни недели для шапки календаря
// const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
</script>

<template>
    <div class = "calendar"> 
        <div class = "calendar-header"> 
            <p> {{ currentTime }} </p>


        </div>
        <p> {{ date }}</p>
    
    </div>


</template>

<style scoped>
    .calendar {
        width: 80%;
        height: 400px;
        background-color: rgb(43, 42, 42);
        border-color: rgb(127, 128, 127);
    }


</style>