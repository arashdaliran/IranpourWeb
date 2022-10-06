<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'


let navigationMenuHeight = ref('0px')
let isNavMenuOpen = false
function toggleNavMenu() {
    navigationMenuHeight.value = isNavMenuOpen ? '0px' : '800px'
    isArtworksOpen.value = false
    isNavMenuOpen = !isNavMenuOpen
}
let isArtworksOpen = ref(false)
let artworksMenuHeight = ref('0px')
function toggleArtworksMenu() {
    artworksMenuHeight.value = isArtworksOpen.value ? '0px' : '300px'
    isArtworksOpen.value = !isArtworksOpen.value
}
</script>

<template>
    <header>
        <div class="mobile">
            <div class="appBar">
                <button class="menuButton" @click="toggleNavMenu()"></button>
                <h1 :style="{paddingLeft : '30px'}">Alireza Iranpour</h1>
            </div>
            <nav class="navigationMenu">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <button @click="toggleArtworksMenu()">
                    <img src="../assets/images/expand-arrow-64.png" style="height:20px;" />
                    Artworks
                </button>
                <div v-if="isArtworksOpen" id="artworksMenu">
                    <RouterLink to="/musics">Musics</RouterLink>
                    <RouterLink to="/quotes">Quotes</RouterLink>
                    <RouterLink to="/concerts">Concerts</RouterLink>
                </div>
                <RouterLink to="/gallery">Gallery</RouterLink>

            </nav>
        </div>

    </header>


</template>

<style scoped lang="scss">
header {
    position: fixed;
    width: 100%;
    z-index: 2;
}

.appBar {
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 50px;
}

.menuButton {
    width: 48px;
    height: 48px;
    background-image: url(../assets/images/menu.svg);
}

.navigationMenu {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    max-height: v-bind(navigationMenuHeight);
    transition: max-height 0.6s;

    >* {
        width: 100%;
        font-size: 25px;
        text-align: center;
        align-self: center;
        padding: 10px;
    }
}

#artworksMenu {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-height: v-bind(artworksMenuHeight);

    >* {
        padding: 7px;
    }
}
@media screen and (min-width: 600px){
    .appBar{
        display: none;
    }
}
</style>