<script setup>
import { ref } from '@vue/reactivity';

const props = defineProps({
    spotify: URL,
    deezer: URL,
    youtube: URL
})
const hasSpotify = ref(props.spotify != undefined)
const hasDeezer = ref(props.deezer != undefined)
const hasYoutube = ref(props.youtube != undefined)
</script>

<template>
    <div>
        <h5>LISTEN NOW :</h5>
        <div class="parent">
            <a v-if="hasDeezer" :href="props.deezer" target="_blank">
                <img src="../assets/images/deezerDark.svg" />
            </a>
            <a v-if="hasSpotify" :href="props.spotify" target="_blank">
                <img src="../assets/images/spotifyDark.svg" />
            </a>
            <a v-if="hasYoutube" :href="props.youtube" target="_blank">
                <img src="../assets/images/youtubeDark.svg" />
            </a>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/main.scss' as *;

h5 {
    text-align: center;
}

img {
    width: 30px;
    height: 30px;
    padding: 10px;
    background-color: rgb(185, 185, 185);
    border-radius: 45px;
    transition: background-color 0.3s;
}

.parent {
    display: flex;
    align-items: center;
    justify-content: center;

    >a {
        margin: 10px;
    }
}

a:hover {
    background-color: transparent;

    >img {
        background-color: $selectedBgColor;
    }
}
</style>