<script setup>
import NavigationBar from '../components/NavigationBar.vue';
import { ref,computed } from 'vue';
import { useViewport } from '../plugins/NoobiesQueries';
import { useUrl } from '../plugins/NoobiesUrlMaker';
const images = [
    {
        address : "../assets/images/IMG_20200606_125256_869.jpg",
        pos : "0% 30%"
    },
    {
        address : "../assets/images/IMG_20220722_132350_403.jpg",
        pos : "0% 30%"
    },
    {
        address : "../assets/images/IMG_20220722_132355_963.jpg",
        pos : "0% 10%"
    },  
    {
        address : "../assets/images/Iranpour.jpeg",
        pos : "0% 30%"
    },
    
]

const vp = useViewport()
const showPreview = ref(false)
const previewSource = ref("")
function openPreview(address) {
    previewSource.value = useUrl(address)
    showPreview.value = true
}
</script>
<template>
    <NavigationBar class="mobileNav"/>
    <main class="main">
        <h1>Gallery</h1>
        <div class="gridGallery"  :class="{tabletGrid : vp.isTablet, desktopGrid : vp.isDesktop }" >
            <button v-for="img in images" @click="openPreview(img.address)">
                <img :src="useUrl(img.address)" :style="{objectPosition : img.pos}" />
            </button>
        </div>
    </main>
    <div v-if="showPreview" class="imagePreviewParent">
        <div class="div">
            <button class="closeBtn" @click="showPreview = false">
                <img src="../assets/images/close.svg" />
            </button>
            <div class="imageBox">
                <img class="prevImage" :src="previewSource">
            </div>
        </div>
    </div>

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
img{
    width: 100%;
    height: 100%;
}

.gridGallery {
    margin-top: 20px;
    display: grid;
    grid-template-columns: auto;
    gap: 10px;
    button {
        height: 350px;
    }
}
.tabletGrid{
    grid-template-columns: auto auto;

}
.desktopGrid{
    grid-template-columns: auto auto auto;
    button {
        height: 400px;
    }
}
.imagePreviewParent{
    position: fixed;
    z-index: 150;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.814);
    .div{
        display: block;
        margin: auto;
        margin-top: $appBarHeight ;
        width: 95%;
        height: 100%;
    }
}
.closeBtn{
    margin-top: 10px;
    display: block;
    position: absolute;
    top: $appBarHeight + 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.50);
    border-radius: 10px;
}
.closeBtn:hover{
    background-color:rgba(37, 35, 32, 0.8) ;
    border-radius: 10px;
}
.imageBox{
    display: block;
    position: static;
    width: 98%;
    height: 89%;
    margin: auto;
}
.prevImage{
    display: block;
    object-fit: contain;
    margin: auto;
}
</style>