import React from "react"
import { S7Logo, XiamenAirLogo } from "./images"

export const overlayFilterData = [
  {
    name: 'Без пересадок',
    action: () => {},
    isActive: false,
  },
  {
    name: '1 пересадока',
    action: () => {},
    isActive: false,
  },
  {
    name: '2 пересадки',
    action: () => {},
    isActive: false,
  },
  {
    name: '3 пересадки',
    action: () => {},
    isActive: false,
  },
]

export const companyFilterData = [
  {
    name: 'Все',
    action: () => {},
    isActive: true,
  },
  {
    name: 'S7 Airlines',
    action: () => {},
    isActive: false,
  },
  {
    name: 'XiamenAir',
    action: () => {},
    isActive: false,
  },
]

interface LogoMap {
  [key:string]: React.FunctionComponent,
}

export const logoMap: LogoMap= {
  "7dc12d0b-ce42-48a0-8673-0dad4d698764": S7Logo,
  "cddfa038-823b-43b1-b18d-395731881077": XiamenAirLogo,
}