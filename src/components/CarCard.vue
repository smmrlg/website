<script setup>
import {ref, computed} from 'vue';

  const cars = ref([ // Массив со всеми данными об автомобилях.
 {
    id: 1,
    model: '1. Mustang GT',
    manufacturer: 'Ford',
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=800&q=80',
    description: '',
    button: 'Order',
  },
  {
    id: 2,
    model: '2. Supra RZ',
    manufacturer: 'Toyota',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    description: 'An icon of the Japanese automotive industry and the king of canyon drifting, the 2JZ engine is ready for the wildest modifications in the festival garage.',
    button: 'Order',
  },
  {
    id: 3,
    model: '3. Skyline GT-R V-Spec II (R34)',
    manufacturer: 'Nissan',
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=800&q=80',
    description: 'Godzilla in the flesh. Its unrivaled all-wheel drive system makes this car the king of street racing in any situation.',
    button: 'Order',
  },
  {
    id: 4,
    model: '4. 911 GT3 RS',
    manufacturer: 'Porsche',
    image: 'https://images.unsplash.com/photo-1503376713208-fc34b86e00ed?auto=format&fit=crop&w=800&q=80',
    description: "A road-legal track monster. Perfect grip on the volcano's serpentine roads.",
    button: 'Order',
  },
  {
    id: 5,
    model: '5. Aventador SVJ',
    manufacturer: 'Lamborghini',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80',
    description: 'A naturally aspirated V12, ALA aerodynamics, and a space-age design. This supercar is designed to dominate the Goliath series sprints.',
    button: 'Order',
  },
  {
    id: 6,
    model: '6. F40',
    manufacturer: 'Ferrari',
    image: 'https://images.unsplash.com/photo-1583122620071-28dc66087b22?auto=format&fit=crop&w=800&q=80',
    description: "The last car created during Enzo Ferrari's lifetime. No electronic assistance—just pure drive and a turbocharged V8 engine.",
    button: 'Order',
  },
  {
    id: 7,
    model: '7. P1',
    manufacturer: 'McLaren',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?auto=format&fit=crop&w=800&q=80',
    description: 'A hybrid hypercar ahead of its time. The combination of an electric motor and a gasoline engine provides instant acceleration.',
    button: 'Order',
  },
  {
    id: 8,
    model: '8. Corvette C8 Stingray',
    manufacturer: 'Chevrolet',
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80',
    description: 'A mid-engine revolution of American classics. Excellent balance and handling at an affordable price in the supercar world.',
    button: 'Order',
  },
  {
    id: 9,
    model: '9. Challenger SRT Demon',
    manufacturer: 'Dodge',
    image: 'https://images.unsplash.com/photo-1620882814836-98ecbc4eddb9?auto=format&fit=crop&w=800&q=80',
    description: "Designed for one purpose: drag racing. Capable of lifting its front wheels off the ground at the festival's takeoff runway.",
    button: 'Order',
  },
  {
    id: 10,
    model: '10. R8 V10 Plus',
    manufacturer: 'Audi',
    image: 'https://images.unsplash.com/photo-1603539947678-0e9805953047?auto=format&fit=crop&w=800&q=80',
    description: 'An everyday supercar. Quattro all-wheel drive and a high-revving V10 make it a versatile weapon on Mexican roads.',
    button: 'Order',
  },
  {
    id: 11,
    model: '11. M4 Competition',
    manufacturer: 'BMW',
    image: 'https://images.unsplash.com/photo-1616422285623-14ff0162a4b6?auto=format&fit=crop&w=800&q=80',
    description: 'The Bavarian benchmark for handling. An aggressive grille and twin-turbo six-cylinder engine, ready for long drifts in drift zones.',
    button: 'Order',
  },
  {
    id: 12,
    model: '12. AMG One',
    manufacturer: 'Mercedes-Benz',
    image: 'https://images.unsplash.com/photo-1695240217983-df4639e7284f?auto=format&fit=crop&w=800&q=80',
    description: 'Formula 1 for public roads. The main star of the Horizon Mexico festival, featuring active aerodynamics.',
    button: 'Order',
  },
  {
    id: 13,
    model: '13. Valkyrie',
    manufacturer: 'Aston Martin',
    image: 'https://images.unsplash.com/photo-1655452336340-df6aee052327?auto=format&fit=crop&w=800&q=80',
    description: 'A spaceship on wheels. Developed in collaboration with Red Bull Racing to generate incredible downforce.',
    button: 'Order',
  },
  {
    id: 14,
    model: '14. Zonda Cinque',
    manufacturer: 'Pagani',
    image: 'https://images.unsplash.com/photo-1599824040974-9b2f63f585d8?auto=format&fit=crop&w=800&q=80',
    description: 'Art in motion. A carbon-titanium body and the incredible sound of an AMG V12 engine echoing through the jungle.',
    button: 'Order',
  },
  {
    id: 15,
    model: '15. Jesko',
    manufacturer: 'Koenigsegg',
    image: 'https://images.unsplash.com/photo-1678122394541-657754b2383c?auto=format&fit=crop&w=800&q=80',
    description: "The king of top speed, this hypercar easily exceeds 480 km/h on the country's main highway.",
    button: 'Order',
  },
  {
    id: 16,
    model: '16. Impreza WRX STI',
    manufacturer: 'Subaru',
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=800&q=80',
    description: 'A rally legend. Its boxer engine sound and blue paint with gold wheels make it the perfect choice for dirt roads and off-roading.',
    button: 'Order',
  },
  {
    id: 17,
    model: '17. Chiron',
    manufacturer: 'Bugatti',
    image: 'https://images.unsplash.com/photo-1608632616428-c11645e5239a?auto=format&fit=crop&w=800&q=80',
    description: 'Luxury at 400+ km/h. The quad-turbocharged W16 engine delivers incredible power, accessible at the touch of a button.',
    button: 'Order',
  },
  {
    id: 18,
    model: '18. Bronco Badlands',
    manufacturer: 'Ford',
    image: 'https://images.unsplash.com/photo-1629897048514-3dd74142ff23?auto=format&fit=crop&w=800&q=80',
    description: 'Built for the wild. Cliff jumping, river crossings, and desert exploration—nothing stands in the way of this off-roader.',
    button: 'Order',
  },
  {
    id: 19,
    model: '18. Bronco Badlands',
    manufacturer: 'Ford',
    image: 'https://images.unsplash.com/photo-1629897048514-3dd74142ff23?auto=format&fit=crop&w=800&q=80',
    description: 'Built for the wild. Cliff jumping, river crossings, and desert exploration—nothing stands in the way of this off-roader.',
    button: 'Order',
  }
])
// Math.ceil - JS функция, которая округляет результат вычислений большую сторону. 
// computed () - Вычисляемое свойство Vue
// ref() - реактивность Vue для отслеживания изменений в переменных
// .slice - разрезать массив на нужное кол-во элементов 

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
}


</script>

<template>
       <!-- <div v-for = "car in cars" :key="car.id" class="card"> 
            <h3 class = "header"> {{ car.model }} {{ car.manufacturer }} </h3>
            <img :src ="car.image" class = "picture"> 
            <p class = "description"> {{ car.description }}</p>
            <button class = "order">{{ car.button }}</button>
       </div> -->

       <div v-for = "car in paginatedCars" :key="car.id" class="card"> 
            <h3 class = "header"> {{ car.model }} {{ car.manufacturer }} </h3>
            <img :src = "car.image" class = "picture"> 
            <p class = "description"> {{ car.description }}</p>
            <button class = "order">{{ car.button }}</button>
        </div>
        <button class = "pageForward" @click="nextPage" :disabled="currentPage === totalPages"> Вперёд </button>
        <button class = "pageBack" @click="prevPage" :disabled="currentPage === 1"> Назад </button>
</template>

<style scoped>


</style>
