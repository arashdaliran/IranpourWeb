<script setup>
import { ref } from 'vue';

const items = ref([
{ idname: "Home", link: "#" },
{ idname: "About", link: "#about" },
    { idname: "Artworks", link: "#musics" },
    { idname: "Gallery", link: "#gallery" },
    { idname: "Contact", link: "#contact" },])
let hiddenMenuHeight = ref('0px')
// const navBarHeight = ref('80px')
let isOpen = false
function toggleSideMenu() {
    hiddenMenuHeight.value = isOpen ? '0px' : items.value.length * 70 + 'px'
    console.log(hiddenMenuHeight.value )
    isOpen = !isOpen
}
</script>

<template>

    <div id="nav">
        <a v-for="item in items" :href="item.link">{{item.idname}}</a>
        <button id="menu-button" @click="toggleSideMenu()"></button>
        <h1 class="title">Alireza Iranpour</h1>
    </div>
    <div id="hidden-menu" ref="sideMenu">
        <!-- <button id="close-button" @click="toggleSideMenu()"></button> -->
        <a v-for="item in items" :href="item.link">{{item.idname}}</a>
    </div>

</template>

<style scoped>
.title {
    padding: 0.5ex;
    text-align: center;
    align-self: center;
    float: none;
    display: none;
}

#nav {
    top: 0;
    height: 50px;
    background-image: linear-gradient( rgb(21, 21, 21) , transparent );
}

#nav a {
    text-align: right;
    display: block;
    color: #f2f2f2;
    padding: 14px 16px;
    font-size: 17px;
    float: right;
    align-self: center;
}

#hidden-menu {
    overflow: hidden;
    top: 0;
    margin-top: v-bind('"-"+navBarHeight');
    height: v-bind('hiddenMenuHeight');
    background-color: rgba(36, 36, 36, 0.467);
    transition: height 0.3s;
    width: 100%;
}

#hidden-menu a {
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    margin-bottom: 20px;
    font-size: 17px;
}

#menu-button {
    float: right;
    background-image: url(../assets/images/menu.svg);
    background-color: transparent;
    margin: 5px 5px;
    border: 0px;
    width: 48px;
    height: 48px;
    display: none;
}

#close-button {
    float: right;
    position: relative;
    margin-top: -80px;
    margin-right: 20px;
    border: 0px;
    background-color: transparent;
    background-image: url(../assets/images/close.svg);
    width: 48px;
    height: 48px;
    object-fit: fill;

}



@media screen and (max-width : 620px) {
    #nav {
        background-image: linear-gradient(rgb(21, 21, 21), transparent);
    }

    #nav a {
        display: none;
    }

    #menu-button {
        display: flex;
    }

    .title {
        display: block;
    }
}
</style>