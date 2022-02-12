import Filter from './components/Filter'
import KindSelector from './components/KindSelector'

import { MainLogo } from './images'

import { overlayFilterData, companyFilterData} from './constants'
import tickets from '../data/tickets.json'

import s from './App.module.scss'

function App() {

  return (
    <div className={s.root}>
      <div className={s.header}>
        <MainLogo/>
      </div> 
      <div className={s.body}>
        <div className={s.filters}>
          <Filter name={'количество пересадок'} data={overlayFilterData}/>
          <Filter name={'компания'} data={companyFilterData}/>
        </div>
        <div className={s.results}>
          <KindSelector />
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
