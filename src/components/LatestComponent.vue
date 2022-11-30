<script setup>
import { useViewport } from '../plugins/NoobiesQueries';

const vp = useViewport()
</script>

<template>
    <main>
        <h2 :class="{ biggerFont: !vp.isMobile }">Latest Singles</h2>
        <a :class="{ albumDesktop: !vp.isMobile }" href="/musics#caucasian">
            <img class="albumImage" src="../assets/images/album/caucasian.jpg" />
            <h3>Caucasian</h3>
            <h4>2022</h4>
            <p class="collapseText">This piece contains the local-folk atmosphere of Caucasian music. After listening
                to this piece, the local celebrations and the pristine nature of this area can be imagined. </p>
        </a>
        <a :class="{ albumDesktop: !vp.isMobile }" href="/musics#hengam">
            <img class="albumImage" src="../assets/images/album/Hengam.jpeg" />
            <h3>Hengam</h3>
            <h4>2020</h4>
            <p class="collapseText">Inspired by the red sand beach called Hormuz, and the calmness of
                Hengam Island, which are located in the south of Iran. This piece consists of two parts, the first part
                is the prelude. </p>
        </a>

        <!-- <h2>Latest Album</h2>
        <img class="albumImage" src="../assets/images/album/Hengam.jpeg" /> -->
    </main>

</template>

<style scoped lang="scss">
@use '../assets/main.scss' as *;


h2 {
    text-align: center;
    margin: 30px;
}

a {
    display: inline-block;
    padding: 30px 0;
    h3,
    h4,
    p {
        padding-top: 10px;
        width: 85%;
        margin: auto;
    }
}

.collapseText {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.albumImage {
    display: block;
    width: 90%;
    margin: auto;
}


.albumDesktop {
    padding: 10px;
    margin-right: 0;

    img {
        padding-left: 20px;
        padding-right: 50px;
        width: 40%;
        float: left;
    }

    h3,
    h4,
    p {
        padding-bottom: 10px;
        text-align: left;
        width: auto;
    }

}
</style>
