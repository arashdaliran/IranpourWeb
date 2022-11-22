<script setup>
import { onMounted, reactive, ref } from 'vue';
import AlbumComponent from '../components/AlbumComponent.vue';
import AlbumListItem from '../components/AlbumListItem.vue';
import MusicLinkBox from '../components/MusicLinkBox.vue';
import NavigationBar from '../components/NavigationBar.vue'
import TrackComponent from '../components/TrackComponent.vue';
import { useViewport } from '../plugins/NoobiesQueries';
import { useUrl } from '../plugins/NoobiesUrlMaker';
const vp = useViewport()
const albums = reactive({
    snowWaltz: {
        id: 'snow',
        name: "Snow Waltz",
        date: "September 9, 2021",
        imgSrc: useUrl("../assets/images/album/snow.jpeg")
    },
    ethernalReturn: {
        id: 'ethernal',
        name: "Ethernal Return",
        date: "September 9, 2021",
        imgSrc: useUrl("../assets/images/album/ethernal.jpeg")
    }
})
const isListOpen = ref(false)
function toggleAlbumsList() {
    isListOpen.value = !isListOpen.value
}

const items = ref([])
function onItemListClick() {

    toggleAlbumsList()

}
</script>

<template>
    <NavigationBar class="mobileNav" :opBtnImage="useUrl('../assets/images/vinyl.svg')"
        @on-option-btn-click="toggleAlbumsList()" />
    <div class="parallel">
        <aside class="albumsList" :class="{listCollapse: !isListOpen && !vp.isDesktop }">
            <AlbumListItem ref="items" v-for="(item) in albums" :name="item.name" :date="item.date" :image="item.imgSrc"
                :id="item.id" @on-item-click="onItemListClick(item)" />
        </aside>
        <main class="main" :class="{mainDesktop : vp.isDesktop}">
            <AlbumComponent :id="albums.snowWaltz.id" :name="albums.snowWaltz.name" :date="albums.snowWaltz.date"
                :image="albums.snowWaltz.imgSrc">
                <template #mainDescription>
                    <p class="farsi">او را در یک شب پاییزی برای اولین بار ملاقات نمودم. هوا بسیار سرد بود و ناگهان بارش
                        برف
                        شروع
                        شد. با اینکه سرما استخوان را می‌شکست، اما آتشِ بین دل‌هایمان ما را گرم می‌کرد.</p>

                </template>
                <template #translate>
                    <p>I met her on an autumn night for the first time. The weather got extremely cold and all of a
                        sudden
                        it started to snow. Although it was freezing, the closeness between us warmed our hearts.</p>

                </template>
                <template #listen>
                    <MusicLinkBox
                        spotify="https://open.spotify.com/album/6MykWxfKUsQkLNZOdV55TX?si=dNpTMb98QwWyDTbwhd7nmg"
                        youtube="https://youtu.be/3BDn7FmlWfs" />
                </template>
            </AlbumComponent>
            <AlbumComponent :id="albums.ethernalReturn.id" :name="albums.ethernalReturn.name"
                :date="albums.ethernalReturn.date" :image="albums.ethernalReturn.imgSrc">
                <template #mainDescription>
                    <p class="farsi">چه می‌شود اگر روزی یا شبی یک دیو شما را در تنهاترین تنهایی شما بدزدد و به شما
                        بگوید:
                        «این زندگی را که اکنون در آن زندگی می‌کنید و زندگی کرده‌اید، باید یک بار دیگر و چندین بار دیگر
                        زندگی
                        کنید.» در آن چیز جدیدی نخواهد بود، اما هر درد و هر شادی و هر فکر و آه و هر چیزی که به طور
                        غیرقابل
                        توصیفی کوچک یا بزرگ در زندگی شما وجود دارد باید به همان ترتیب و توالی به شما بازگردد. . . »
                        <br>آیا
                        خودت را پایین نمی‌اندازی و دندان قروچه نمی‌کنی و به دیویی که اینطور صحبت می‌کند نفرین نمی‌کنی؟
                        یا
                        آیا یک بار لحظه ای فوق العاده را تجربه کرده‌اید که به او پاسخ می‌دهید: «تو خدایی و من هرگز خدایی
                        تر
                        از این نشنیدم»
                    </p>
                    <p class="reference"><code>[Schacht, Richard (2001). Nietzsche's Postmoralism: Essays on Nietzsche's Prelude
                    to Philosophy's Future] </code></p>
                    <p class="farsi">مرگ از دیدگاه مولوی، به معنی «قطع و پایان زندگی» نیست، بلکه «تولّد» و «آغاز زندگی
                        جاودانه‌» دیگری است. در اندیشه مولوی، «مواجهه‌ مرگ با انسان»، «متناسب با شیوه‌ زندگی» و
                        «رویارویی و
                        مواجهه‌ انسان با مرگ» نیز «متناسب با شیوه‌ زندگی» اوست. اما از دیدگاه هایدگر، مرگ، نوعی «انتخاب
                        اجباری» و «هراسناک» و «امکان قطعی و درونی هستی» خود انسان است که «نقطه پایانی» بر زندگی اوست؛
                        انسان،
                        تنها با مرگ است که «هستی غیر اصیلش» به «ساحت اصیل» در می‌آید و مرگ، حدّ پایان زندگی اوست.</p>
                    <p class="reference"><code>[A Comparative Study and Analysis of Death and Its Relationship with the Meaning of
                    Life in Rumi and Heidegger]</code></p>
                </template>
                <template #translate>
                    <p>What if some day or night a demon were to steal after you into your loneliest loneliness, and say
                        to
                        you, "This life as you now live it and have lived it, you will have to live once more and
                        innumerable times more; and there will be nothing new in it, but every pain and every joy and
                        every
                        thought and sigh and everything unutterably small or great in your life will have to return to
                        you,
                        all in the same succession and sequence ..." <br>Would you not throw yourself down and gnash
                        your
                        teeth and curse the demon who spoke thus? Or have you once experienced a tremendous moment when
                        you
                        would have answered him: "You are a god and never have I heard anything more divine."</p>
                    <p><code>[Schacht, Richard (2001). Nietzsche's Postmoralism: Essays on Nietzsche's Prelude to Philosophy's
                    Future]</code> </p>
                    <p>Death in Rumi's view is not the "breaking off or end of life" rather it is the naissance and
                        inception of "eternal life". According to Rumi, "death's encounter with man" is "proportionate
                        to
                        one's way of life" and "human encounter with death" is also "proportionate to one's way of
                        life".But
                        according to Heidegger, death is a kind of "compulsory and frightening choice" and a "decisive
                        and
                        internal possibility" of human existence which stands for the "finish line" of his/her life; it
                        is
                        only through death that human "inauthentic existence" turns "authentic" and death is the final
                        border of his/her life. He believes that death is not an event to be expected to happen in
                        future,
                        but rather it is a fundamental and inseparable structure of our "being-in-the-world". Thus an
                        honest
                        encounter with death and accepting her is the key to "autonomy", "concentration" and "authentic
                        life".</p>
                    <p><code>[A Comparative Study and Analysis of Death and Its Relationship with the Meaning of Life in Rumi and
                    Heidegger]</code> </p>

                </template>
                <template #listen>
                    <MusicLinkBox
                        spotify="https://open.spotify.com/album/7rehxituLcidvHpsIAK2dd?si=BjXkYhXbRiCb3DsgzziXNQ"
                        youtube="https://youtu.be/JBbBVlUzM4c" />
                </template>
            </AlbumComponent>


        </main>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/main.scss' as *;

.albumsList {
    background-color: rgb(40, 40, 35);
    max-width: 260px;
    width: 60%;
    height: 100%;
    position: fixed;
    left: 0;
    overflow: hidden;
    top: $appBarHeight;
    transition: max-width 0.4s;

    >* {
        padding: 10px;
        margin-top: 20px;
 
    }
}

.listCollapse {
    max-width: 0;
}

.mobileNav {
    position: fixed;
    top: 0;
    width: 100%;
    min-height: $appBarHeight;
    z-index: 1000;
}

.main {
    margin-top: $appBarHeight;

    >* {
        margin-top: 10px;
    }
}
.mainDesktop{
    margin-right: 20px;
    margin-left: 280px;
    max-width: 100%;
}

//album style

h3,
h4,
h5 {
    //padding-top: 30px;
    text-align: center;
    text-transform: capitalize;
}

img {
    display: block;
    width: 100%;
    max-width: 400px;
    margin: auto;
    margin-top: 20px;
}

.trackImg {
    height: 70px;

}
</style>