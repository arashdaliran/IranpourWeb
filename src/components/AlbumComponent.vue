<script setup>
import DescriptionBox from './DescriptionBox.vue';
import { useViewport } from '../composables/NoobiesQueries';
import { onMounted ,useSlots } from 'vue';
import { computed } from '@vue/reactivity';
const props = defineProps({
    name: String,
    image: URL,
    date: String,
})
const slots = useSlots()
const hasTranslate = computed(() =>{
    return slots.translate != undefined
})
const vp = useViewport()

</script>

<template>
    <div>
        <div :class="{ desktopView: vp.isDesktop }">
            <div>
                <h3>{{ props.name }}</h3>
                <h5>{{ props.date }}</h5>
                <p v-if="vp.isDesktop"><br></p>
                <slot v-if="vp.isDesktop" name="listen"></slot>
            </div>
            <div>
                <img :src="props.image" alt="Couldn't load album image !" />
            </div>
        </div>
        <DescriptionBox :has-translate="hasTranslate">
            <template #default>
                <slot name="mainDescription"></slot>
            </template>
            <template #translate>
                <slot name="translate"></slot>
            </template>
        </DescriptionBox>
        <!-- TODO: TracksBox -->
        <slot v-if="!vp.isDesktop" name="listen"></slot>
    </div>
</template>

<style scoped lang="scss">
img {
    display: block;
    width: 100%;
    max-width: 400px;
    margin: auto;
    margin-top: 20px;
}

h3,
h4,
h5 {
    padding-top: 10px;
    text-align: center;
    text-transform: capitalize;
}

.desktopView {
    display: flex;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    >* {
        flex: 50%;
        align-items: center;
        padding: 20px;
    }
}
</style>