<script setup>
const props = defineProps({
    name: String,
    date: String,
    id: String,
    image: URL
})
</script>
<template>

    <RouterLink :id="props.id + '_'" class="parent" @click="$emit('onItemClick')" :to="{ name: 'musics', hash: `#${props.id}` }">
        <img :src="props.image" style="width: 50px; height: 50px;float: left;" alt="abc" />
        <h4>{{ props.name }}</h4>
        <h5>{{ props.date }}</h5>
    </RouterLink>
</template>
<style scoped lang="scss">
.parent {
    display: block;
    min-width: 220px;
    width: 80%;
    margin: auto;
    align-items: center;
    justify-items: center;
    background-color: rgb(51, 46, 40);

    >h5,
    h4 {
        margin-top: 6px;
        text-align: center;
    }
}
</style>
