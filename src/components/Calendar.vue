<script setup>
const date = new Date()
const monthNames = ["Январь",  "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
const currentYear = date.getFullYear()

</script>

<template>
    <p> {{ currentYear }} </p>




</template>