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
        <h3>{{ props.name }}</h3>
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

    >h3{
        margin-top: 6px;
        font-weight: 500;
        font-size: 19px;
        text-align: center;
    }
    >h5{
        margin-top: 6px;
        font-size: 12px;
        font-weight: 500;
        text-align: center;
    }
}
</style>
