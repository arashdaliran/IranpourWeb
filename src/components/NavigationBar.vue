<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useViewport } from '../composables/NoobiesQueries';
import { useUrl } from '../composables/NoobiesUrlMaker';

const props = defineProps(['opBtnImage'])
const hasExtraButton = ref(props.opBtnImage != undefined)



const vp = useViewport()
let navigationMenuHeight = ref('0px')
let isNavMenuOpen = ref(false)
function toggleNavMenu() {
    navigationMenuHeight.value = isNavMenuOpen.value ? '0px' : '800px'
    isArtworksOpen.value = false
    isNavMenuOpen.value = !isNavMenuOpen.value
}
const menuButtonImage = computed(() => {
    return isNavMenuOpen.value ? useUrl("../assets/images/close.svg") : useUrl("../assets/images/menu.svg")
})
let isArtworksOpen = ref(false)
let artworksMenuHeight = ref('0px')
function toggleArtworksMenu() {
    artworksMenuHeight.value = isArtworksOpen.value ? '0px' : '300px'
    isArtworksOpen.value = !isArtworksOpen.value
}
function openArtworksMenu() {
    if (isArtworksOpen.value || !vp.isDesktop)
        return
    toggleArtworksMenu()
}
function closeArtworksMenu() {
    if (!isArtworksOpen.value)
        return
    toggleArtworksMenu()
}
</script>

<template>
    <header @mouseleave="closeArtworksMenu()">
        <div class="appBar" :class="{ appBarDesktop: !vp.isMobile }">
            <button v-show="hasExtraButton" style="margin-right: 10px;" @click="$emit('onOptionBtnClick')">
                <img class="extraBtnImg" :src="props.opBtnImage" />
            </button>
            <h1>Alireza Iranpour</h1>
            <button class="menuButton" @click="toggleNavMenu()">
                <img :src="menuButtonImage" />
            </button>
        </div>
        <nav class="navigationMenu" :class="{ navMenuDesktop: !vp.isMobile }">
            <button v-show="hasExtraButton && vp.isTablet" style="margin-right: 10px;"
                @click="$emit('onOptionBtnClick')">
                <img class="extraBtnImg" :src="props.opBtnImage" />
            </button>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <button @click="toggleArtworksMenu()" 
                    @mouseenter="openArtworksMenu()"
                    :class="{ artDesktop: !vp.isMobile }">
                <img src="../assets/images/expand-arrow-64.png" style="height:20px;"
                    :class="{ arrow: isArtworksOpen }" />
                Artworks
            </button>
            <div v-if="isArtworksOpen && vp.isMobile" id="artworksMenuMobile">
                <RouterLink to="/musics">Musics</RouterLink>
                <RouterLink to="/quotes">Quotes</RouterLink>
                <RouterLink to="/concerts">Concerts</RouterLink>
            </div>
            <RouterLink to="/gallery">Gallery</RouterLink>
            <RouterLink to="#footer" @click="toggleNavMenu()">Contacts</RouterLink>
        </nav>
        <div v-show="isArtworksOpen && !vp.isMobile" class="artworksDesktop">
            <RouterLink to="/musics">Musics</RouterLink>
            <RouterLink to="/quotes">Quotes</RouterLink>
            <RouterLink to="/concerts">Concerts</RouterLink>
        </div>
    </header>
</template>

<style scoped lang="scss">
.appBar {
    padding: 0px 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    h1 {
        flex-grow: 1;
    }

    .menuButton {
        margin: 10px;

        >img {
            height: 40px;
            width: 45px;
        }
    }
}

// .extraBtnImg{
//     object-fit: cover;
// }
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

.extraBtnImg {
    height: 34px;
    width: 34px;
    padding: 6px;
    margin-top: 4px;
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
        padding: 6px;
        font-size: larger;
    }
}
</style>