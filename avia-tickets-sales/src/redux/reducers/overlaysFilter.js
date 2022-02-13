const t = {
  SET_OVERLAYS_FILTER: 'SET_OVERLAYS_FILTER',
}

export const overlaysFilter = (state = [], action) => {
  switch (action.type) {
    case t.SET_OVERLAYS_FILTER:
      return action.filters
    default:
      return state
  }
}

export const setOverlaysFilter = (filters) => ({
  type: t.SET_OVERLAYS_FILTER,
  filters,
})