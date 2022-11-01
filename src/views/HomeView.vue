<script setup>
import NavigationBar from '../components/NavigationBar.vue';
import { useViewport } from '../plugins/NoobiesQueries';
import LatestComponent from '../components/LatestComponent.vue';

const vp = useViewport()
//todo move this to a composable file
const vFontSizer = {
    updated(el, binding) {
        let size = binding.value * vp.width + 'px'
        el.style.fontSize = size
        el.style.lineHeight = size
    },

}

</script>

<template>
    <NavigationBar v-show="vp.isMobile" class="mobile-nav" />
    <template class="mainBody" :class="{ topMargin: vp.isMobile }">
        <div class="imageContainer">
            <img src="../assets/images/home/iranpour-main.png" alt="Alireza Iranpour" />
            <h1 v-font-sizer="0.06" v-if="!vp.isMobile" class="titleDesktop">Alireza Iranpour</h1>
            <p v-font-sizer="0.04" class="subtitle">PIANIST & COMPOSER</p>
        </div>
        <NavigationBar class="desktopNav" v-if="!vp.isMobile" />
        <LatestComponent />
    </template>
</template>

<style scoped lang="scss">
@use '../assets/main.scss' as *;

.topMargin {
    padding-top: $appBarHeight;
}

.mobile-nav {
    position: fixed;
    top: 0;
    width: 100%;
    min-height: $appBarHeight;
    z-index: 1000;
}

.desktopNav {
    align-items: center;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    bottom: 0;
}

.mainBody {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: center;
}

.imageContainer {
    position: relative;
    width: 100%;
    margin-bottom: -10px;
    padding: 0;
}

img {
    object-fit: cover;
    object-position: 50% 0%;
    width: 100%;
    height: auto;
    max-height: 650px;
}

.titleDesktop {
    position: absolute;
    top: 20px;
    left: 20px;
    color: black;
    font-weight: bolder;
    text-shadow: 3px 3px 10px white;
}

.subtitle {
    font-family: $subtitleFont;
    color: antiquewhite;
    text-align: center;
    position: absolute;
    // font-size: 10px;
    font-weight: bold;
    width: 100%;
    transform: translate(-50%, -50%);
    bottom: 0%;
    left: 50%;
    text-shadow: 2px 2px 10px black;
}
</style>