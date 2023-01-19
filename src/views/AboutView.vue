<script setup>
import NavigationBar from '../components/NavigationBar.vue';
import { useViewport } from '../composables/NoobiesQueries';
const vp = useViewport()

window.scrollTo(0,0)
</script>

<template>
    <NavigationBar class="navBar"></NavigationBar>
    <main :class="{ desktop: !vp.isMobile }">
        <img src="../assets/images/Iranpour.jpeg">
        <p><span style="font-size: 50px">A</span>lireza Iranpour, born in Isfahan, Iran, is a classical pianist who
            completed his bachelor's degree in
            Mechanical Engineering. He is currently studying music and improving as a musician. He is also interested in
            composing music and tries to be inspired by arts such as painting and sculpture. Classical music has played
            the most significant role in his life and has been the biggest part of his interest. Moreover, the dream of
            musical performance has completely changed his life. His goal is to successfully complete his academic
            studies in Musical Performance (classical piano) and play pieces in prominent and famous halls worldwide.
            The Baroque period is his favorite era in the arts and Bach is his favorite composer. He considers himself a
            debtor to Bach. People like Sergiu Celibidache, Theodor W. Adorno, Wilhelm Kempff, Vladimir Horowitz,
            Sviatoslav Richter, Arthur Rubinstein, and Bahman Mohassess, a famous Iranian painter and sculptor, had a
            great influence on his artistic work.</p>
    </main>
</template>
<style scoped lang="scss">
@use "../assets/main.scss" as *;
main{
    margin-top: $appBarHeight;
}
p {
    margin-top: 20px;
    font-size: larger;
}

img {
    padding-bottom: 20px;
    object-fit: cover;
    width: 100%;
}
.navBar{
    position: fixed;
    z-index: 100;
    top: 0;
}
.desktop {
    margin-bottom: 100px;
    img {
        max-width: 350px;
        position: relative;
        float: right;
    }

}
</style>