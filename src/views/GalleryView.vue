<script setup>
import NavigationBar from '../components/NavigationBar.vue';
import { useViewport } from '../plugins/NoobiesQueries';

const vp = useViewport()

</script>
<template>
    <NavigationBar class="mobileNav"/>
    <main class="main">
        <h1>Gallery</h1>
        <div class="responsive"  :class="{tabletGrid : vp.isTablet, desktopGrid : vp.isDesktop }" >
            <img src="../assets/images/IMG_20200606_125256_869.jpg" style="object-position: 0% 30%;" />
            <img src="../assets/images/IMG_20220722_132350_403.jpg" style="object-position: 0% 30%;" />
            <img src="../assets/images/IMG_20220722_132355_963.jpg" style="object-position: 0% 10%;"/>
            <img src="../assets/images/Iranpour.jpeg" style="object-position: 0% 30%;" />

        </div>
    </main>

</template>
<style scoped lang="scss">
@use "../assets/main.scss" as *;

.mobileNav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

h1 {
    text-align: center;
}

.main {
    margin-top: $appBarHeight;
}

.responsive {
    margin-top: 20px;
    display: grid;
    grid-template-columns: auto;
    gap: 10px;
    img {
        width: 100%;
        height: 350px;
    }
}
.tabletGrid{
    grid-template-columns: auto auto;

}
.desktopGrid{
    grid-template-columns: auto auto auto auto;
}
</style>