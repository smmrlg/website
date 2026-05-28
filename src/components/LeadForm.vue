<template> 
    <form class="lead-form">
        <h1 class="header"> Example header </h1>
       
        <div class="input-fields"> 
            <input class="name" placeholder="Enter your name">
            <input class="phone-number" type="tel" placeholder="Enter your phone number">
            <input class="email" type="email" placeholder="Enter your email">
            <input class="message" placeholder="Anything you would like us to know?">
        </div>

        <div class="buttons">
            <router-link to="/about">
                <button class="call-back"> О нас </button>
            </router-link>

            <button class="let-me-call" @click="callCompany"> Позвоните сейчас </button>
        </div>
    </form>

</template>

<script setup>
    const phoneNumber = '+9720507935972';
    const callCompany = () => {
    // Открывает звонилку
    window.location.href = "tel:${phoneNumber}"; //$ - синтаксис JS который подставляет переменную 
  
    //TODO: Валидация инпута 
}
</script>

<style src="./css/LeadForm.css" scoped></style> 