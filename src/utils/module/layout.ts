import { LAYOUT } from "@/enum"
import { stringify, Storage, parse } from "../shared"

/** 侧边栏状态 */
export function setIsCollapsed (theme: boolean) {
  Storage.setItem(LAYOUT.IS_COLLAPSED, stringify(theme))
}

/** 侧边栏状态 */
export function getIsCollapsed () {
  return parse(Storage.getItem(LAYOUT.IS_COLLAPSED)  || 'false' )
}

/** 侧边栏状态 */
export function removeIsCollapsed () {
  Storage.removeItem(LAYOUT.IS_COLLAPSED)
}