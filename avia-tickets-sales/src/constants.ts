import { store } from './redux/store'

import companies from './data/companies.json'
interface Prop {
  storeData: string[],
  setter: Function,
}
interface GetActionProp {
  storeData: string[],
  setter: Function,
  id: string,
  shouldeResetOther?: boolean,
  additionalSelections?: string[],
}
interface GetIsActiveProp {
  storeData: string[],
  id: string,
}

const getIsActive = ({ storeData, id }:GetIsActiveProp) => storeData.includes(id)

const getAction = ({ storeData , id, setter, additionalSelections }:GetActionProp) => {
  
  if (additionalSelections) {
    store.dispatch(setter(additionalSelections))
    return
  }

  const filteredData = () => {
    return storeData.filter((filterItem: string) => filterItem !== id)
  }

  const newState = storeData.includes(id) ? filteredData() : [...storeData, id ]

  store.dispatch(setter(newState))
}

export const overlayFilterData = [
  {
    id: '0',
    name: 'Без пересадок',
    isActive: ({ storeData }:Prop) => getIsActive({ storeData, id: '0' }),
    action: (props:Prop) => getAction({ ...props, id: '0' }),
  },
  {
    id: '1',
    name: '1 пересадка',
    isActive: ({ storeData }:Prop) => getIsActive({ storeData, id: '1' }),
    action: (props:Prop) => getAction({ ...props, id: '1' }),
  },
  {
    id: '2',
    name: '2 пересадки',
    isActive: (props:Prop) => getIsActive({ ...props, id: '2' }),
    action: (props:Prop) => getAction({ ...props, id: '2' }),
  },
  {
    id: '3',
    name: '3 пересадки',
    isActive: (props:Prop) => getIsActive({ ...props, id: '3' }),
    action: (props:Prop) => getAction({ ...props, id: '3' }),
  },
]

export const companyFilterData = [
  {
    name: 'Все',
    isActive: (props:Prop) => companies.every(el => props.storeData.includes(el.id) ),
    action: (props:Prop) => getAction({ ...props, id: 'Все', additionalSelections: companies.map(el => el.id ) }),
  },
  {
    name: 'S7 Airlines',
    id: 'cddfa038-823b-43b1-b18d-395731881077',
    isActive: (props:Prop) => getIsActive({ ...props, id: 'cddfa038-823b-43b1-b18d-395731881077' }),
    action: (props:Prop) => getAction({ ...props, id: 'cddfa038-823b-43b1-b18d-395731881077' }),
  },
  {
    name: 'XiamenAir',
    id: '7dc12d0b-ce42-48a0-8673-0dad4d698764',
    isActive: (props:Prop) => getIsActive({ ...props, id: '7dc12d0b-ce42-48a0-8673-0dad4d698764' }),
    action: (props:Prop) => getAction({ ...props, id: '7dc12d0b-ce42-48a0-8673-0dad4d698764' }),
  },
]