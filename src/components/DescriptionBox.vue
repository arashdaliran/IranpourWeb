<script setup>
import { ref } from 'vue';
const emit = defineEmits('isTranslate')
const isTranslateSelected = ref(false)

</script>

<template>
    <div>
        <div class="translateBox">
            <h5>Language :</h5>
            <button :class="{ selectedButton: !isTranslateSelected }"
            @click="isTranslateSelected = false">persian</button>
            <h5 style="user-select:none ;">|</h5>
            <button :class="{ selectedButton: isTranslateSelected }" 
            @click="isTranslateSelected = true">english</button>
        </div>
        <div :class="{collapse : isTranslateSelected}">
            <slot></slot>
        </div>
        <div :class="{collapse : !isTranslateSelected}">
            <slot name="translate"></slot>
        </div>

    </div>
</template>

<style scoped lang="scss">
button {
    font-weight: bolder;
}
.collapse{
    max-height : 0;
    overflow: hidden;
}
.selectedButton {
    background-color: rgb(255, 253, 192);
    color: rgb(42, 42, 42);
    border-radius: 5px;
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
