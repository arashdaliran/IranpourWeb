import { computed } from '@vue/reactivity'
import { onMounted, onUnmounted, reactive } from 'vue'
const breakpoints = {
    mobile: 0,
    tablet: 500,
    desktop: 750
}
export function useViewport() {
    const isMobCom = computed(() =>{
        return res.type == 'mobile'
    })
    const isDesktopCom = computed(()=>{
        return res.type == 'desktop'
    })
    const isTabletCom = computed(()=>{
        return res.type == 'tablet'
    })
    const res = reactive({
        width: 0,
        height: 0,
        type: 'default',
        isMobile : isMobCom,
        isDesktop : isDesktopCom,
        isTablet : isTabletCom
    })

    function update() {
        res.width = window.innerWidth
        res.height = window.innerHeight
        viewPortType()
    }

    function viewPortType() {
        for (var key in breakpoints) {
            const e = breakpoints[key]
            if (res.width > e) {
                res.type = key
            } else {
                break
            }
        }
    }
    onMounted(() => {
        window.addEventListener('resize', update)
        update()
    })
    onUnmounted(() => window.removeEventListener('resize', update))
    return res
}
export function useScroll(func){
    onMounted(()=>[
        window.addEventListener('scroll',func)
    ])
    onUnmounted(()=> window.removeEventListener('scroll',func))
}