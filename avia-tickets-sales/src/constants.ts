import { store } from './redux/store'
interface Prop {
  storeData: string[],
  setter: Function,
}
interface GetActionProp {
  storeData: string[],
  setter: Function,
  name: string,
  shouldeResetOther?: boolean,
  additionalSelections?: string[],
}
interface GetIsActiveProp {
  storeData: string[],
  name: string,
}

const getIsActive = ({ storeData, name }:GetIsActiveProp) => storeData.includes(name)

const getAction = ({ storeData , name, setter }:GetActionProp) => {        
  const filteredData = () => {
    return storeData.filter((filterItem: string) => filterItem !== name)
  }

  const newState = storeData.includes(name) ? filteredData() : [...storeData, name ]

  store.dispatch(setter(newState))
}

export const overlayFilterData = [
  {
    name: 'Без пересадок',
    isActive: ({ storeData }:Prop) => getIsActive({ storeData, name: 'Без пересадок' }),
    action: (props:Prop) => getAction({ ...props, name: 'Без пересадок' }),
  },
  {
    name: '1 пересадка',
    isActive: ({ storeData }:Prop) => getIsActive({ storeData, name: '1 пересадка' }),
    action: (props:Prop) => getAction({ ...props, name: '1 пересадка' }),
  },
  {
    name: '2 пересадки',
    isActive: (props:Prop) => getIsActive({ ...props, name: '2 пересадки' }),
    action: (props:Prop) => getAction({ ...props, name: '2 пересадки' }),
  },
  {
    name: '3 пересадки',
    isActive: (props:Prop) => getIsActive({ ...props, name: '3 пересадки' }),
    action: (props:Prop) => getAction({ ...props, name: '3 пересадки' }),
  },
]

export const companyFilterData = [
  {
    name: 'Все',
    isActive: (props:Prop) => getIsActive({ ...props, name: 'Все' }),
    action: (props:Prop) => getAction({ ...props, name: 'Все' }),
  },
  {
    name: 'S7 Airlines',
    isActive: (props:Prop) => getIsActive({ ...props, name: 'S7 Airlines' }),
    action: (props:Prop) => getAction({ ...props, name: 'S7 Airlines' }),
  },
  {
    name: 'XiamenAir',
    isActive: (props:Prop) => getIsActive({ ...props, name: 'XiamenAir' }),
    action: (props:Prop) => getAction({ ...props, name: 'XiamenAir' }),
  },
]