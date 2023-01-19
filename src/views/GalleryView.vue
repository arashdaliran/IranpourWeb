<script setup>
import NavigationBar from '../components/NavigationBar.vue';
import { ref,computed } from 'vue';
import { useViewport } from '../composables/NoobiesQueries';
import FotosComponent from '../components/FotosComponent.vue';
const images = [
    {
        address : "images/IMG_20200606_125256_869.jpg",
        pos : "0% 30%"
    },
    {
        address : "images/IMG_20220722_132350_403.jpg",
        pos : "0% 30%"
    },
    {
        address : "images/IMG_20220722_132355_963.jpg",
        pos : "0% 10%"
    },  
    {
        address : "images/Iranpour.jpeg",
        pos : "0% 30%"
    },
    
]

const vp = useViewport()
const showPreview = ref(false)

window.scrollTo(0,0)
</script>
<template>
    <NavigationBar class="mobileNav"/>
    <main class="main">
        <h1>Gallery</h1>
        <FotosComponent :images="images" />
    </main>

</template>
<style scoped lang="scss">
@use "../assets/main.scss" as *;

.mobileNav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

h1 {
    text-align: center;
}
button:hover{
    background-color: transparent;
    border-radius: 0;
}

.main {
    margin-top: $appBarHeight;
}

</style>