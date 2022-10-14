import { Theme } from "@/enum"
import { stringify, Storage, parse } from "../shared"


/** 主题色 */
export function setTheme (theme: boolean) {
    Storage.setItem(Theme.GLOBAL_THEME, stringify(theme))
}

/** 主题色 */
export function getTheme () {
    return parse(Storage.getItem(Theme.GLOBAL_THEME)  || 'false' )
}

/** 主题色 */
export function removeTheme () {
    Storage.removeItem(Theme.GLOBAL_THEME)
}