<script setup>
const ali = 'Alireza Iranpour'

const props = defineProps({
    albumImg : URL,
})
</script>

<template>
<div class="track">
    <div class="image">
        <img :src="props.albumImg" />
        <!-- <slot name="img"></slot> -->
    </div>
    <div>
        <slot name="title"></slot>
        <h5>{{ali}}</h5>
    </div>
</div>
</template>

<style scoped lang="scss">
@use '../assets/main.scss' as *;
    .track{
        background-color: $itemBgColor ;
        padding: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        // max-height: 100px;
    }
    img{
        height: 70px;
    }
    .image{
        // float: left;
        height: 70px;
        background-color: aqua;
    }
</style>