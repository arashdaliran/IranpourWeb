<script setup>
import FotosComponent from '../components/FotosComponent.vue';
import NavigationBar from '../components/NavigationBar.vue'
const teachingStylImages = [
    {
        address: "images/Concerts/IUT2016/1.jpg",
        pos: "100% 0%"
    },
    {
        address: "images/Concerts/IUT2016/2.jpg",
        pos: "70% 50%"
    },
]
const naghme2016Images = [
    {
        address: "images/Concerts/Naghmeh2016/1.jpg",
        pos: "100% 0%"
    },
    {
        address: "images/Concerts/Naghmeh2016/2.jpg",
        pos: "0% 0%"
    },
    {
        address: "images/Concerts/Naghmeh2016/3.jpg",
        pos: "30% 0%"
    },
    {
        address: "images/Concerts/Naghmeh2016/4.jpg",
        pos: "100% 0%"
    },
]
const imm2017Images = [
    {
        address: "images/Concerts/IMM2017/1.jpg",
        pos: "60% 0%"
    },
]
const yalda01Images = [
    {
        address: "images/Concerts/Yalda2017/1.jpg",
        pos: "40% 0%"
    },
    {
        address: "images/Concerts/Yalda2017/2.jpg",
        pos: "30% 0%"
    },
]
const yalda02Images = [
    {
        address: "images/Concerts/YaldaFest2017/1.jpg",
        pos: "50% 0%"
    },
    {
        address: "images/Concerts/YaldaFest2017/2.jpg",
        pos: "100% 0%"
    },
]
const avandMui2017Images = [
    {
        address: "images/Concerts/AvandMUI2017/1.jpg",
        pos: "40% 0%"
    },
]
const iut2018Images = [
    {
        address: "images/Concerts/IUT2018/1.jpg",
        pos: "80% 0%"
    },
]
const street2018Images = [
    {
        address: "images/Concerts/StreetIUT2018/1.jpg",
        pos: "60% 0%"
    },
    {
        address: "images/Concerts/StreetIUT2018/2.jpg",
        pos: "40% 0%"
    },
    {
        address: "images/Concerts/StreetIUT2018/3.jpg",
        pos: "40% 0%"
    },
]
const naghme2018Images = [
    {
        address: "images/Concerts/Naghmeh2018/1.jpg",
        pos: "20% 0%"
    },
    {
        address: "images/Concerts/Naghmeh2018/2.jpg",
        pos: "50% 0%"
    },
]
const iut2019Images =[
{
        address: "images/Concerts/IUT2019/1.jpg",
        pos: "50% 0%"
    },
    {
        address: "images/Concerts/IUT2019/2.jpg",
        pos: "60% 0%"
    },
]

window.scrollTo(0,0)
</script>
<template>
    <NavigationBar class="navbar" />
    <main>
        <h3 class="ConcertTitle">Concert in IUT 2019</h3>
        <FotosComponent :images="iut2019Images" />
        <h3 class="ConcertTitle">Naghmeh Competition 2018</h3>
        <FotosComponent :images="naghme2018Images" />
        <h3 class="ConcertTitle">Street Concert in IUT, 2018</h3>
        <FotosComponent :images="street2018Images" />
        <h3 class="ConcertTitle">Concert in IUT 2018</h3>
        <FotosComponent :images="iut2018Images" />
        <h3 class="ConcertTitle">Yalda Festival 2017</h3>
        <FotosComponent :images="yalda02Images" />
        <h3 class="ConcertTitle">Yalda Concert with Avand Band, 9 Dec. 2017</h3>
        <FotosComponent :images="yalda01Images" />
        <h3 class="ConcertTitle">Concert with Avand band in MUI, 10 Nov. 2017</h3>
        <FotosComponent :images="avandMui2017Images" />
        <h3 class="ConcertTitle">Concert in IMM 2017</h3>
        <FotosComponent :images="imm2017Images" />
        <h3 class="ConcertTitle">Naghmeh Competition 2016</h3>
        <FotosComponent :images="naghme2016Images" />
        <h3 class="ConcertTitle">Teaching stylistics in IUT 2016</h3>
        <FotosComponent :images="teachingStylImages" />

    </main>
</template>
<style scoped lang="scss">
main {
    padding-top: 70px;
}

h3 {
    text-align: center;
    padding: 20px 0;
}

.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}
</style>
