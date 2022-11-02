<script setup>
import { ref } from 'vue';
import { useViewport } from '../plugins/NoobiesQueries';
const emit = defineEmits('isTranslate')
const isTranslateSelected = ref(false)
const vp = useViewport()
</script>

<template>
    <div style="padding-top: 25px;">
        <h4>Description<br></h4>
        <div v-if="!vp.isDesktop" class="translateBox">
            <h5>Language :</h5>
            <button :class="{ selectedButton: !isTranslateSelected }"
                @click="isTranslateSelected = false">persian</button>
            <h5 style="user-select:none ;">|</h5>
            <button :class="{ selectedButton: isTranslateSelected }"
                @click="isTranslateSelected = true">english</button>
        </div>
        <div :class="{desktopDesc : vp.isDesktop}">
            <div :class="{ collapse: isTranslateSelected && !vp.isDesktop }">
                <slot></slot>
            </div>
            <div :class="{ collapse: !isTranslateSelected && !vp.isDesktop }">
                <slot name="translate"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// @use '../assets/main.scss' as *;
button {
    font-weight: bolder;
}

h4{
    text-align: center;
    line-height: 30px;
}

.collapse {
    display: none;
    overflow: hidden;
}

.selectedButton {
    background-color:#dd9;
    // background-color:$selectedBgColor;
    color: rgb(42, 42, 42);
    border-radius: 5px;
}
.desktopDesc{
    display: flex;
    flex-direction: row-reverse;
    > *{
        flex: 50%;
        padding: 10px 20px;
    }
}
.translateBox {
    padding: 10px 5px;
    display: flex;
    flex-direction: row;
    width: 200px;
    align-items: center;
    justify-content: space-between;

    >button {
        padding: 6px;
    }
}
</style>
