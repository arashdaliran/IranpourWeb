<script setup>
import NavigationBar from '../components/NavigationBar.vue';
import { useViewport } from '../plugins/NoobiesQueries';

const vp = useViewport()
</script>

<template>
    <NavigationBar v-show="vp.isMobile" class="mobile-nav" />
    <main class="mainBody" :class="{topMargin : vp.isMobile }">
        <img src="../assets/images/piano-player.jpg" alt="Alireza Iranpour" />
        <NavigationBar class="desktopNav" v-if="!vp.isMobile" />
        <div>
            <p class="subtitle">PIANIST & COMPOSER</p>
            <h2 class="comming">Comming soon...</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus leo neque, ut maximus enim egestas
                ultrices. Vivamus vel tortor mattis, dignissim eros vel, ornare ante. Fusce scelerisque, leo efficitur
                faucibus fermentum, dui nisi dignissim libero, bibendum facilisis lorem purus ac dui. Donec bibendum
                scelerisque malesuada. Donec sagittis gravida turpis nec egestas. In condimentum in massa id aliquam. Ut
                in pulvinar sapien. Vivamus eget laoreet massa. Nullam at risus cursus, elementum elit non, pulvinar
                nunc. Suspendisse potenti. Morbi malesuada purus orci, auctor scelerisque ex scelerisque in. Nullam
                luctus euismod ligula ac imperdiet. Suspendisse lacinia dolor hendrerit, iaculis urna ut, commodo
                tortor. Nam pharetra, dolor eu posuere varius, nunc lacus blandit nulla, vitae accumsan elit sem in mi.

                Pellentesque odio mauris, fringilla ac euismod sed, cursus quis arcu. Pellentesque quis varius nulla. In
                euismod felis vitae mollis tempus. Aliquam erat volutpat. Sed tempus mollis aliquet. In hac habitasse
                platea dictumst. Maecenas lobortis dui ac mi scelerisque pretium. Aenean cursus nisl elit, sit amet
                vulputate nisi fringilla nec. In elit lectus, pellentesque non volutpat non, egestas et diam. Morbi
                pharetra elementum arcu, sed suscipit ex cursus vitae. Integer rutrum a est vel facilisis.

                Integer tempor eros semper volutpat tincidunt. Donec quam tortor, viverra at ipsum sed, tincidunt
                facilisis neque. Suspendisse a nisi pretium, vestibulum libero eget, consequat lacus. Vestibulum ac
                condimentum dui. Donec dapibus sodales arcu quis pulvinar. Pellentesque vel eros vel nulla feugiat
                consequat. Proin nec orci id nisl interdum porta.

                Praesent sagittis pretium scelerisque. Donec quis lectus sed ipsum aliquam placerat. Integer convallis
                at neque auctor consectetur. In nec pulvinar ipsum, eget sagittis sapien. Nullam nec ante sollicitudin,
                porttitor ipsum quis, luctus mi. Phasellus pellentesque auctor velit, in sollicitudin neque bibendum et.
                Nulla id orci eget mauris convallis tristique. Sed ultricies ut purus a consectetur. Fusce magna elit,
                mattis ut fermentum sit amet, dapibus tristique risus. Duis eleifend ex quis imperdiet pretium. Nam id
                turpis turpis. Maecenas luctus augue ut elit condimentum, tincidunt pharetra massa consectetur. Mauris
                ut nisl molestie, vestibulum urna eget, commodo quam. Nulla quis enim ullamcorper, pulvinar mi ut,
                lacinia erat.

                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris nulla
                velit, posuere eget velit scelerisque, elementum egestas risus. Nunc congue urna nunc, a aliquet magna
                aliquam eget. Fusce non fermentum nisi, vitae condimentum quam. Nullam lacinia augue neque, quis
                placerat elit tempus vitae. Integer tempor justo sit amet ligula consequat, quis semper orci dignissim.
                Vestibulum ligula lorem, tincidunt in maximus a, sollicitudin sed nibh. Sed tempus sapien sed arcu
                dictum dapibus. Praesent consectetur, diam id pulvinar porttitor, diam arcu commodo velit, quis
                venenatis libero massa aliquam eros. Mauris ex justo, volutpat vitae mi at, cursus lacinia nibh.</h3>
        </div>
    </main>
</template>

<style scoped>
.topMargin {
    padding-top: 54px;
}

.mobile-nav {
    position: fixed;
    top: 0;
    width: 100%;
}

.desktopNav {
    align-items: center;
}

.mainBody {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: center;
}


img {
    object-fit: cover;
    object-position: 50% 0%;
    width: 100%;
    height: auto;
    /* max-height: 650px; */
}

.title {
    display: block;
    font-weight: bolder;
}

.subtitle {
    font-size: 20px;
    padding-top: 20px;
}
</style>