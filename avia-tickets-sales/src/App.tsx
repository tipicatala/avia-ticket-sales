import { useSelector } from 'react-redux'
import { RootState } from './redux/store'

import Filter from './components/Filter'
import KindSelector from './components/KindSelector'
import Ticket from './components/Ticket'

import tickets from './data/tickets.json'

import { MainLogo } from './images'
import { overlayFilterData, companyFilterData } from './constants'
import { setOverlaysFilter } from './redux/reducers/overlaysFilter'
import { setCompaniesFilter } from './redux/reducers/companiesFilter'

import s from './App.module.scss'

function App() {
  const { overlaysFilter, companiesFilter } = useSelector((state: RootState) => ({
    overlaysFilter: state.overlaysFilter,
    companiesFilter: state.companiesFilter,
  }))

  return (
    <div className={s.root}>
      <div className={s.header}>
        <MainLogo/>
      </div> 
      <div className={s.body}>
        <div className={s.filters}>
          <Filter
            name={'количество пересадок'}
            data={overlayFilterData}
            storeData={overlaysFilter}
            setter={setOverlaysFilter}
          />
          <Filter
            name={'компания'}
            data={companyFilterData}
            storeData={companiesFilter}
            setter={setCompaniesFilter}
          />
        </div>
        <div className={s.results}>
          <KindSelector />
          <div>
            {tickets.map(ticket => (
              <Ticket key={ticket.id} {...ticket}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
