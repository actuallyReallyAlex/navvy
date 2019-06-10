const uiDefaultState = {
  currentSidebarItem: 'Servicing',
  isSidebarExpanded: true
}

export default (state = uiDefaultState, action) => {
  switch (action.type) {
    case 'SET_SIDEBAR_EXPANDED':
      return Object.assign({}, uiDefaultState, action.payload)
    case 'SET_SIDEBAR_ITEM':
      return Object.assign({}, uiDefaultState, action.payload)
    default:
      return state
  }
}
