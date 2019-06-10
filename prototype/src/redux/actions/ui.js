const SET_SIDEBAR_EXPANDED = 'SET_SIDEBAR_EXPANDED'
const SET_SIDEBAR_ITEM = 'SET_SIDEBAR_ITEM'

export const setSidebarExpanded = isSidebarExpanded => ({
  type: SET_SIDEBAR_EXPANDED,
  payload: { isSidebarExpanded }
})

export const setSidebarItem = currentSidebarItem => ({
  type: SET_SIDEBAR_ITEM,
  payload: { currentSidebarItem }
})
