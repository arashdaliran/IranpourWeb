<script setup>
import { useViewport } from '../plugins/NoobiesQueries';

const vp = useViewport()
</script>

<template>
    <main>
        <h2 :class="{biggerFont: !vp.isMobile }">Latest Single</h2>
        <a :class="{ albumDesktop: !vp.isMobile }" href="/musics">
            <img class="albumImage" src="../assets/images/album/Hengam.jpeg" />
            <h3 class="marginWithFoto">Hengam</h3>
            <h4 class="marginWithFoto">2020</h4>
            <p class="marginWithFoto">Inspired by the red sand beach called Hormuz, and the calmness of
                Hengam Island, which are located in the south of Iran. This piece consists of two parts, the first part
                is the prelude. </p>
        </a>
        <!-- <h2>Latest Album</h2>
        <img class="albumImage" src="../assets/images/album/Hengam.jpeg" /> -->
    </main>

</template>

<style scoped lang="scss">
@use '../assets/main.scss' as *;

main{
    max-width: 1000px;
}
h2 {
    text-align: center;
    margin: 30px;
}

.marginWithFoto {
    padding-top: 10px;
    display: block;
    width: 75%;
    margin: auto;

    //adding collapse to text
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}


.albumImage {
    display: block;
    width: 80%;
    margin: auto;
}


.albumDesktop {
    padding-right: 0;
    margin-right: 0;

    >img {
        padding-left: 20px;
        width: 40%;
        float: left;
    }

    >.marginWithFoto {
        padding-left: 10vmin;
        text-align: left;
        width: auto;
    }

}
</style>
