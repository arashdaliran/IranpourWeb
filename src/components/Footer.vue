<script setup>
import { useViewport } from '../plugins/NoobiesQueries';

    const vp = useViewport()
</script>

<template>
    <footer id="footer" class="footer">
        <h3 class="title">Contact / Listen</h3>
        <ul class="itemsContainer" :class="{itemsDesktop : !vp.isMobile}">
            <a href="https://open.spotify.com/artist/2LVd7axk40plkAb8PfEwqW" target="_blank">
                <img src="../assets/images/spotify.svg" />
                <h5>Spotify</h5>
            </a>
            <a href="https://www.youtube.com/channel/UCvYwAsq-ZRk4r2juPE9Z3YQ" target="_blank">
                <img src="../assets/images/youtube.svg" />
                <h5>YouTube</h5>
            </a>
            <a href="https://deezer.page.link/LoGvGJgLexhpcKQG6" target="_blank">
                <img src="../assets/images/deezer.svg" />
                <h5>Deezer</h5>
            </a>
            <a href="https://twitter.com/iranpour_alrz" target="_blank">
                <img src="../assets/images/twitter.svg" />
                <h5>Twitter</h5>
            </a>
            <a href="mailto: alirezairanpour_klavier@yahoo.com" target="_blank">
                <img src="../assets/images/mail.svg" />
                <h5>Mail</h5>
            </a>
        </ul>
        <h4 class="developer">Designed & Developed by Arash Daliran</h4>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    position: relative;
    margin-top: 15px;
    z-index: 100;
}
.title{
    text-align: center;
    margin-bottom: 20px;
    margin-top: 10px;
}

.itemsContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: auto;
    >* {
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        padding: 5px;
        margin: 5px;
    }
}
.itemsDesktop{
    flex-direction: row;
}
img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
h4{
    text-align: center;
    padding-top: 20px;
    font-size: x-small;
    font-family: 'Courier New', Courier, monospace;
    color: gray;
    user-select: none;
}
</style>