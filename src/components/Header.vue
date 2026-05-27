<script setup>
import LoginButton from './LoginButton.vue';
import Menu from './Menu.vue';


</script>

<template>
  <header class="app-header">
    <!-- Левая часть: Логотип -->
    <div class="header-section left">
      <p class="logo-placeholder">Логотип</p>
    </div>
    
    <!-- Центральная часть: Текст -->
    <div class="header-section center">
      <h1 class="header-title"> Название </h1>
    </div>

    <!-- Правая часть: Кнопка -->
    <div class="header-section right">
      <router-link to="/order">
          <button class="nav-button">Заказ</button>
      </router-link> 
    </div>

    <!-- <LoginButton/>-->
    <Menu/>
  
  </header>
</template>



<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000; /* Черный фон */
  color: #ffffff;            /* Белый текст для контраста */
  padding: 0 24px;           /* Отступы по бокам */
  height: 70px;              /* Высота хедера */
}

/* 
  Использование flex: 1 для секций гарантирует, 
  что центральный текст будет строго посередине экрана, 
  даже если логотип и кнопка разной ширины.
*/
.header-section {
  flex: 1;
}

.left {
  display: flex;
  justify-content: flex-start;
}

.center {
  display: flex;
  justify-content: center;
}

.right {
  display: flex;
  justify-content: flex-end;
  padding-right: 15vw;
}

/* Стилизация элементов */
.logo-placeholder {
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 1px;
}

.header-title {
  font-size: 1.1rem;
  margin: 0;
  font-weight: bold;
}

.nav-button {
  background-color: #f07bd8;
  color: #000000;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
}
</style>