<script setup>
import {ref, computed} from 'vue';
import carsData from './CarData.json'
import { ITEMS_ON_ONE_PAGE } from '@/constants.js'

// здесь идет функция которая отправляет запрос к бекенду и возвращает нам массив 
// function getData() {}
const cars = ref(carsData)

/* Подсказка по синтаксису
  Math.ceil - JS функция, которая округляет результат вычислений большую сторону. 
 computed () - Вычисляемое свойство Vue
 ref() - реактивность Vue для отслеживания изменений в переменных
 .slice - разрезать массив на нужное кол-во элементов 
 parseInt() - отбрасывает дробную часть  */ 
 
/*  Закомментированная пагинация   
  const currentPage = ref(1) //переменная текущей страницы 
  const elementsPerPage = ref(9) // сколько элементов будем отображать 
  const totalPages = computed(() => Math.ceil(cars.value.length/elementsPerPage.value)) //вычисляем сколько всего странц 

  const paginatedCars = computed(() => {
      const start = (currentPage.value -  1) * elementsPerPage.value // считаем с какого элемента выводим, например
                                            // для первой страницы (1 - 1) = 0 * 9 = 0, выводим с нулевого элемента массива
                                            // для второй страницы (2-1) = 1 * 9 = 9, выводим начиная  с девятого
                                            // для третьей страницы (3-1) = 2 * 9 = 18, выводим начиная с восемнадцатого

      const end = start + elementsPerPage.value // на каком элементе останавливаемся. .slice не включает последний элемент
                                              // для первой страницы 0 + 9, выведутся элементы 0-8
      return cars.value.slice (start, end)
})

 function nextPage() {
    currentPage.value++
}

function prevPage () {
    currentPage.value--
} */
 
const totalResults = computed( () => { // переменная которая должна хранить сколько всего у нас будет страниц 

      const totalLength = cars.value.length // Обозначаем сколько всего у нас элементов в массиве 
      const limit = ITEMS_ON_ONE_PAGE // Обозначаем сколько элементов нам нужно на ОДНОЙ странице 
      const leftover = totalLength % limit // возвращаем остаток от деления переменных
      
      if (leftover == 0) { // Если остаток = 0 
        const fullPages = totalLength / limit // то объявляем переменную FullPages и возвращаем результат деления всех элементов массива на кол-во элементов на одну страницу
        return fullPages
      }
      else { // Если остаток не равен нулю 
        const fullPages = (parseInt (totalLength/limit) + 1) // Откидываем дробную часть и прибавляем +1 страницу.
        return fullPages
      }
})

const currentPage = ref(1)
 
function nextPage() {
    currentPage.value++
}

function prevPage () {
    currentPage.value--
}

const result = computed ( () => { // новый массив result который должен содержать элементы 0-8 из массива cars
    const startIndex = (currentPage.value - 1) * ITEMS_ON_ONE_PAGE // индекс для начала отрисовки каждой страницы 
    const endIndex = startIndex + ITEMS_ON_ONE_PAGE // на каком элементе закначиваем 

    let carsArray = [] //временный массив в который мы заносим данные из массива cars 
    for (let i = startIndex; i < endIndex && i < cars.value.length; i++) { // обычный цикл for 
      carsArray.push (cars.value[i]) // элементу i массива carsArray присваиваем элемент i из массива cars 
    } //.push избавляет от undefined 
    return carsArray
})





</script>

<template>
      <!-- div без пагинации, просто выводит все элементы в контейнере -->
       <!-- <div v-for = "car in cars" :key="car.id" class="card"> 
            <h3 class = "header"> {{ car.model }} {{ car.manufacturer }} </h3>
            <img :src ="car.image" class = "picture"> 
            <p class = "description"> {{ car.description }}</p>
            <button class = "order">{{ car.button }}</button>
       </div> -->

       <!-- Закомментированная пагинация -->
      <!--  <div v-for = "car in paginatedCars" :key="car.id" class="card"> 
            <h3 class = "header"> {{ car.model }} {{ car.manufacturer }} </h3>
            <img :src = "car.image" class = "picture"> 
            <p class = "description"> {{ car.description }}</p>
            <button class = "order">{{ car.button }}</button>
        </div>
        <button class = "pageForward" @click="nextPage" :disabled="currentPage === totalPages"> Вперёд </button>
        <button class = "pageBack" @click="prevPage" :disabled="currentPage === 1"> Назад </button> -->
        
        <!-- То что делали вчера -->
       <div class = "grid-table">
            <div v-for = "car in result" :key="car.id" class="grid-cell">
              <span class = "cell-title"> {{ car.model }} </span>
              <span class = "cell-subtitle"> </span>
            </div>
        </div>

        <button class = "pageForward" @click="nextPage" :disabled="currentPage === totalResults"> Вперёд </button>
        <button class = "pageBack" @click="prevPage" :disabled="currentPage === 1"> Назад </button>

        
        
</template>

<style src="./css/CarCard.css" scoped> </style>
