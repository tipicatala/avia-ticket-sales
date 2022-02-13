import { useEffect, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from './redux/store'

import Filter from './components/Filter'
import KindSelector from './components/KindSelector'
import Ticket from './components/Ticket'

import allSegments from './data/segments.json'
import tickets from './data/tickets.json'

import { MainLogo } from './images'
import { overlayFilterData, companyFilterData } from './constants'
import { setOverlaysFilter } from './redux/reducers/overlaysFilter'
import { setCompaniesFilter } from './redux/reducers/companiesFilter'

import s from './App.module.scss'

interface TicketType {
  id: string;
  price: number;
  companyId: string;
  segments: string[];
}

function App() {
  const { overlaysFilter, companiesFilter } = useSelector((state: RootState) => ({
    overlaysFilter: state.overlaysFilter,
    companiesFilter: state.companiesFilter,
  }))

  const [sortKind, setSortKind] = useState('optimal')
  const [dataFiltered, setDataFiltered] = useState(tickets)
  const [dataSorted, setDataSorted] = useState(tickets)

  useEffect(() => {
    if (!(companiesFilter.length || overlaysFilter.length)) setDataFiltered(tickets)

    const result = dataSorted
    .filter((ticket) => companiesFilter.length ? companiesFilter.includes(ticket.companyId) : true)
    .filter((ticket) => {
      const filteredSegments = allSegments
        .filter(segment => ticket.segments.includes(segment.id))
        .filter(segment =>  overlaysFilter.includes(segment.stops ? segment.stops.length.toString() : '0'))
  
      return overlaysFilter.length ? filteredSegments.length !== 0 : true
    })

    setDataFiltered(result)

  }, [companiesFilter, overlaysFilter, dataSorted])

  useEffect(() => {
    const sortedByCheap = [...dataSorted].sort((a, b) => a.price - b.price)
    const sortedByFast = [...dataSorted].sort((a, b) => {
      const filteredSegmentsA = allSegments
      .filter(segment => a.segments.includes(segment.id))

      const filteredSegmentsB = allSegments
      .filter(segment => b.segments.includes(segment.id))

      const durationA = filteredSegmentsA.reduce((acc, cur) => acc+=cur.duration,0)
      const durationB = filteredSegmentsB.reduce((acc, cur) => acc+=cur.duration,0)

      return durationA - durationB
    })

    if (sortKind === 'cheap') {
      setDataSorted(sortedByCheap)
      return
    }

    if (sortKind === 'fast') {
      setDataSorted(sortedByFast)
      return
    }

    if (sortKind === 'optimal') {
      const sortedByOptimal = sortedByCheap.map((el, i) => {
        const fastIndex = sortedByFast.findIndex(item => item.id === el.id)
        return { ...el, sortId: i + fastIndex }
      }).sort((a, b) => a.sortId - b.sortId)

      setDataSorted(sortedByOptimal)
    }
  }, [sortKind])

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
          <KindSelector
            setSortKind={setSortKind}
            sortKind={sortKind}
          />
          <div className={s.tickets_wrapper}>
            {dataFiltered.map((ticket:TicketType) => (
              <Ticket key={ticket.id} {...ticket}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
