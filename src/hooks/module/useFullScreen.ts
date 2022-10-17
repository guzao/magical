import { ref, onMounted, onUnmounted } from 'vue'

export const useFullScreen =  () => {

    const isFullScreen = ref(false)

    const toggleFullScreen = () => {
        try {
            isFullScreen.value ? exitFullscreen() : launchFullScreen(document.documentElement) 
        } catch (error) {
            console.log(isFullScreen.value, 'toggleFullScreen error')
            launchFullScreen(document.documentElement) 
            isFullScreen.value = true
        }
    }

    function launchFullScreen (element: any) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    function exitFullscreen() {
        if (document.exitFullscreen) {
        document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }

    const  resizeEvent = () => {
        isFullScreen.value = !isFullScreen.value
    }

    onMounted(() => {
        window.addEventListener('fullscreenchange', resizeEvent)
    })

    onUnmounted(() => {
        window.removeEventListener('fullscreenchange', resizeEvent)
    })
    
    return {
        isFullScreen,
        toggleFullScreen
    }

}
