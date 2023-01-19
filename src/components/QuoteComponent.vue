<script setup>
import { useViewport } from '../composables/NoobiesQueries';
import { useUrl } from '../composables/NoobiesUrlMaker';

const props = defineProps({
    img: String
})
const vp = useViewport()
</script>

<template>
    <div class="parent" :class="{ parentTablet: !vp.isMobile }">
        <div v-if="props.img != undefined" class="image">
            <img :src="useUrl(props.img)" />
        </div>
        <div class="text">
            <slot></slot>
        </div>
    </div>

</template>
<style scoped lang="scss">
.parent {
    display: block;

    img {
        width: 100%;
        max-height: 300px;
        margin-bottom: 10px;
        object-fit: scale-down;
    }
}

.parentTablet {
    display: inline;
    align-items: center;
    // grid-template-columns: auto auto;
    img {
        float: left;
        width: 50%;
    }
}

.parentDesktop {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: center;

    img {
        justify-self: baseline;
    }

    .image {
        justify-self: start;
        // float: left;
    }

    .text {
        

        p {
            text-align: center;
        }
    }
}
</style>