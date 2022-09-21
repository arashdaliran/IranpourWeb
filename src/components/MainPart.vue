<script setup>

</script>

<template>
    <div class="parent">
        <img class="element" src="../assets/images/Alie.jpeg" alt="Alireza Iranpour" />
        <div class="element">
            <h1 class="title" >Alireza Iranpour</h1>
            <p class="subtitle" >PIANIST & COMPOSER</p>
        </div>
    </div>
</template>

<style>
    .parent{
        display: flex;
        flex-flow:row-reverse nowrap;
        justify-content: flex-end;
        align-items: center;
    }
    .parent .element{
        height: 50%;
        max-height: 500px;
        width: 100%;
    }
    .parent .element h1{
        text-align: center;
    }
    img{
        
        margin: 0;
        top: 0;
        right: 0;
        width: 100%;
        max-height: inherit;
        max-width: 800px;
        object-fit: cover;
        z-index: -1;

    }
    .title{
        display: block;
        font-weight: bolder;
    }
    .subtitle{
        font-size:20px ;
        padding-top: 20px;
    }
    @media screen and (max-width : 620px) {
        .parent{
        flex-flow:column nowrap;
    }
    .title{
        display: none;
    }
    .subtitle{
        font-size: 28px;
        line-height: 80px;
    }
    }
</style>