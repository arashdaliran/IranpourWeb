<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useViewport } from '../plugins/NoobiesQueries';

const vp = useViewport()
let navigationMenuHeight = ref('0px')
let isNavMenuOpen = false
function toggleNavMenu() {
    navigationMenuHeight.value = isNavMenuOpen ? '0px' : '800px'
    isArtworksOpen.value = false
    isNavMenuOpen = !isNavMenuOpen
    console.log("is it working : " + navigationMenuHeight.value);
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
        <div class="appBar" :class="{appBarDesktop : !vp.isMobile}">
            <h1>Alireza Iranpour</h1>
            <button class="menuButton" @click="toggleNavMenu()">
                <img src="../assets/images/menu.svg" />
            </button>
        </div>
        <nav class="navigationMenu" :class="{navMenuDesktop : !vp.isMobile}">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <button @click="toggleArtworksMenu()" :class="{artDesktop : !vp.isMobile}">
                <img src="../assets/images/expand-arrow-64.png" style="height:20px;"
                    :class="{arrow : isArtworksOpen}" />
                Artworks
            </button>
            <div v-if="isArtworksOpen && vp.isMobile" id="artworksMenuMobile">
                <RouterLink to="/musics">Musics</RouterLink>
                <RouterLink to="/quotes">Quotes</RouterLink>
                <RouterLink to="/concerts">Concerts</RouterLink>
            </div>
            <RouterLink to="/gallery">Gallery</RouterLink>
        </nav>
        <div v-if="isArtworksOpen && !vp.isMobile" class="artworksDesktop">
            <RouterLink to="/musics">Musics</RouterLink>
            <RouterLink to="/quotes">Quotes</RouterLink>
            <RouterLink to="/concerts">Concerts</RouterLink>
        </div>
    </header>
</template>

<style scoped lang="scss">
.appBar {
    padding: 2px 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    h1 {
        flex-grow: 1;
    }

    .menuButton {
        margin: 10px;
        > img{
            height: 40px;
            width: 45px;
        }
    }
}

.appBarDesktop {
    display: none;
}

.arrow {
    transform: rotate(180deg);
    transition: transform 0.3s;
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
        font-size: 20px;
        text-align: center;
        align-self: center;
        padding: 10px;
    }
}

.navMenuDesktop {
    max-height: 100px;
    flex-direction: row;
    justify-content: space-around;
    max-width: 600px;
    margin: auto;
    .artDesktop {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    >* {
        padding: 4px 10px;
        width: auto;
    }
}
#artworksMenuMobile {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-height: v-bind(artworksMenuHeight);

    >* {
        padding: 7px 0px;
    }
}

.artworksDesktop {
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    max-width: 300px;
    margin: auto;
    flex-direction: row;

    >* {
        padding: 10px;
    }
}
</style>