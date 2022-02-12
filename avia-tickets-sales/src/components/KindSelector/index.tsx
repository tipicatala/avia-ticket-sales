import clsx from 'clsx'

import s from './KindSelector.module.scss'

function KindSelector() {

  return (
    <div className={s.root}>
      <div
        className={clsx(s.sector, s.sector_left)}
        onClick={() => {}}
      >
        Самый дешевый
      </div>
      <div
        className={clsx(s.sector)}
        onClick={() => {}}
      >
        Самый быстрый
      </div>
      <div
        className={clsx(s.sector, s.sector_right)}
        onClick={() => {}}
      >
        оптимальный
      </div>
    </div>
  )
}

export default KindSelector