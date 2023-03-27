<script setup>
import { ref, computed } from 'vue';
import { useViewport } from '../composables/NoobiesQueries';
import { useUrl } from '../composables/NoobiesUrlMaker';
const vp = useViewport()
const props = defineProps({
    images: Array
})
const imagesCount = computed(()=>{
    console.log("count is : " + props.images.length)
    return props.images.length
})
const showPreview = ref(false)
const previewSource = ref("")
function openPreview(address) {
    previewSource.value = useUrl(address)
    showPreview.value = true
}

</script>

<template>
    <div class="gridGallery" :class="{ tabletGrid: vp.isTablet, desktopGrid: vp.isDesktop,
                                     oneColumn : imagesCount == 1, twoColumn : imagesCount == 2}">
        <button v-for="img in props.images" @click="openPreview(img.address)">
            <img class="imagesClass" :src="useUrl(img.address)" :style="{ objectPosition: img.pos}" />
        </button>
    </div>
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
.gridGallery {
    margin-top: 20px;
    display: grid;
    grid-template-columns: auto;
    gap: 10px;

    button {
        height: 350px;
    }
}
.oneColumn{
    display: block;
    button{
        display: block;
        margin: auto;
    }
}
.twoColumn{
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    button {
        height: 400px;
    }
}
.imagesClass{
    filter: grayscale(100%);
}
img{
    width: 100%;
    height: 100%;
}
.tabletGrid {
    grid-template-columns: 50% 50% ;

}
button:hover{
    background-color: transparent;
    border-radius: 0;
}
.desktopGrid {
    grid-template-columns: 33% 33% 33%;

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