<script setup>
import { ref, computed } from 'vue';

const items = ref([
    { idname: "Home", link: "#" },
    { idname: "About", link: "#about" },
    { idname: "Artworks", link: "#musics" },
    { idname: "Gallery", link: "#gallery" },
    { idname: "Contact", link: "#contact" },])
let hiddenMenuHeight = ref('0px')
let hiddenMenuItemHeight = ref(40)
// const navBarHeight = ref('80px')
let isOpen = false
function toggleSideMenu() {
    hiddenMenuHeight.value = isOpen ? '0px' : hiddenMenuItemHeight.value * items.value.length + 'px'
    console.log(hiddenMenuHeight.value)
    isOpen = !isOpen
}
const menuHeightCalc = computed(() => {
    return hiddenMenuItemHeight * items.value.length
})
</script>

<template>

    <div class="navigationBar">
        <button class="square" @click="toggleSideMenu()"></button>
        <h1 class="title">Alireza Iranpour</h1>
        <!-- <a v-for="item in items" :href="item.link">{{item.idname}}</a> -->
        
    </div>
    <div id="hidden-menu">
        <!-- <button id="close-button" @click="toggleSideMenu()"></button> -->
        <button v-for="item in items">{{item.idname}}</button>
    </div>

</template>

<style scoped lang="scss">
.navigationBar {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
}

.nav {
    display: none;
}
</style>