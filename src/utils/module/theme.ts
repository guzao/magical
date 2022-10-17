import { Theme } from "@/enum"
import { stringify, Storage, parse } from "../shared"


/** 主题色 */
export function setTheme (theme: boolean) {
    setThemeModeClass(theme)
    Storage.setItem(Theme.GLOBAL_THEME, stringify(theme))
}

/** 主题色 */
export function getTheme () {
    return parse(Storage.getItem(Theme.GLOBAL_THEME)  || 'false' ) as boolean
}

/** 主题色 */
export function removeTheme () {
    Storage.removeItem(Theme.GLOBAL_THEME)
}


/** HTML添加移除 dark class类 */
export function setThemeModeClass (theme: boolean) {
    const html = document.documentElement
    if (theme) {
        html.className = 'dark'
    } else {
        html.className = ' '
    }
}

/** 初始化主题 */
export function initTheme () {
    const isDark = getTheme()
    setThemeModeClass(isDark)
}

/***  */ 
export function setCssVariable () {

}