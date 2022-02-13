const t = {
  SET_COMPANIES_FILTER: 'SET_COMPANIES_FILTER',
}

export const companiesFilter = (state = [], action) => {
  switch (action.type) {
    case t.SET_COMPANIES_FILTER:
      return action.filters
    default:
      return state
  }
}

export const setCompaniesFilter = (filters) => ({
  type: t.SET_COMPANIES_FILTER,
  filters,
})