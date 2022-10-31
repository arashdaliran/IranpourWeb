<script setup>
import { ref } from 'vue';
import { useViewport } from '../plugins/NoobiesQueries';
const emit = defineEmits('isTranslate')
const isTranslateSelected = ref(false)
const vp = useViewport()
</script>

<template>
    <div>
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
button {
    font-weight: bolder;
}

.collapse {
    max-height: 0;
    overflow: hidden;
}

.selectedButton {
    background-color: rgb(255, 253, 192);
    color: rgb(42, 42, 42);
    border-radius: 5px;
}
.desktopDesc{
    display: flex;
    flex-direction: row;
    > *{
        flex: 50%;
        padding: 0 10px;
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
