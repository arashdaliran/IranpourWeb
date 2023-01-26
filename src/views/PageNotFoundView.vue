<script setup>
import NavigationBar from '../components/NavigationBar.vue';
</script>

<template>
    <NavigationBar />
    <main>
        <div>
            <h2>
                404<br>
            </h2>
            <h3>Sorry!<br>Can't find the page you are looking for.</h3>
        </div>
    </main>
</template>
<style scoped lang="scss">
div {
    display: block;
    height: 100%;
    width: 100%;

}

h2{
    font-size: 100px;
    text-align: center;
    margin-top: 150px;
}
h3 {
    font-size: x-large;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 150px;
}
</style>