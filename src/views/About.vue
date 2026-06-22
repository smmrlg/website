<template>
        <section class="initial"> <!-- Самый верхний элемент на странице. Текст About должен быть наложен на фотку. -->
            <img class="initial-background-img" src="@/images/main-photo.jpg"> 
            <!-- <h1 class="about"> About </h1>-->
        </section>
        
        <section class="owner"> <!-- Описание персоны о которой идет речь на странице About -->
            <h1 class="owner-header"> О мастере </h1>
            
            <div class="owner-description"> 
                <p> Дарья Левчук — сертифицированный мастер перманентного макияжа с международным опытом и индивидуальным подходом к каждой клиентке. Более 500 клиенток доверили мне свою красоту и остались довольны результатом. Для новых клиенток действуют специальные скидки и акции. </p>
                <p> В работе используются только премиальные материалы и современные техники перманентного макияжа. Основное направление моей работы — естественный, эстетичный и гармоничный результат, который подчёркивает индивидуальность и природную красоту. Процедура занимает около 1,5–2 часов, а эффект сохраняется до 2 лет. </p>
            </div>

            <img class="owner-photo" > <!-- Здесь будет фотка -->
            <p class="owner-name"> Имя Фамилия</p> <!-- Этот текст должен быть наложен на фотку выше -->
        </section>

        <section class="salon"> 
            <img class="salon-photo"> <!-- Фотка салона -->
            
            <h1 class="salon-header"> Example header for the salon section </h1>
            
            <div class="salon-description">
                <p> Our heroine is a great beauty master. With years of experience in the industry, she dedicates her life to helping women feel confident and radiant. Her salon is not just a place for beauty treatments; it is a sanctuary where art meets personal care. She constantly upgrades her skills and follows global trends to provide top-notch services. </p>
                <p> Every client stepping into her studio receives a personalized approach tailored to their unique features. She believes true beauty comes from within, and her mission is to highlight that natural glow. Combining premium products with a warm atmosphere, she ensures every visit is luxurious. You will leave looking absolutely gorgeous and feeling completely inspired. </p>
            </div>

            <div class="grouped-photos"> <!-- Ещё две фотки салона -->
                <img> 
                <img>
            </div> 
        </section>
</template>

<style src="./css/About.css" scoped></style>