<template>
  <div>
    <!-- Кнопка -->
    <button class="menu-button" @click="isOpen = true">
      ☰
    </button>

    <!-- Само выезжающее меню (оверлей) -->
    <div class="menu-overlay" :class="{ 'is-open': isOpen }">
        <button class="close-button" @click="isOpen = false">✖</button> <!-- Кнопка закрытия меню -->
        <h2 class="menu-header"> Меню </h2>
        <nav class="menu-links">
        <!-- router-link - это специальные ссылки Vue для SPA (без перезагрузки) -->
        <router-link to="/" @click="isOpen = false">Главная</router-link> <!-- По нажатию на какую-нибудь кнопку в меню переводим переменную isOpen в состояние False чтобы менюшка закрылась -->
        <router-link to="/placeholder1" @click="isOpen = false">Плейсхолдер 1</router-link>
        <router-link to="/placeholder2" @click="isOpen = false">Плейсхолдер 2</router-link>
        <router-link to="/placeholder3" @click="isOpen = false">Плейсхолдер 3</router-link>
        <router-link to="/placeholder4" @click="isOpen = false">Плейсхолдер 4</router-link>
        <router-link to="/about" @click="isOpen = false">Доп. информация</router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Переменная, которая хранит состояние меню (открыто/закрыто)
const isOpen = ref(false)
</script>

<style scoped>
.menu-button {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
  padding: 10px;
  background: #000000;
  color: white;
  border: none;
  border-radius: 5px;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: -100%; /* Прячем меню за экраном слева */
  width: 80%; /* Ширина меню на мобилке */
  height: 100vh;
  background: #000000;
  transition: left 0.3s ease; /* Плавный выезд */
  z-index: 100;
  padding: 20px;
  box-shadow: 2px 0 10px rgba(0,0,0,0.1);
}

.menu-overlay.is-open {
  left: 0; /* Показываем меню */
}
.menu-header {
    text-align: center;

}
.menu-links {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
}

.menu-links a {
  text-decoration: none;
  font-size: 20px;
  color: #ffffff;
}

.close-button {
    background-color: #000000;
    color: white;

}
</style>