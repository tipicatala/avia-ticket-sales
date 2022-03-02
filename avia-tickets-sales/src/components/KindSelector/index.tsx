import clsx from 'clsx'

import s from './KindSelector.module.scss'

interface Props {
  sortKind: string,
  setSortKind: Function,
}

function KindSelector({ sortKind, setSortKind}:Props) {

  return (
    <div className={s.root}>
      <div
        className={clsx(
          s.sector,
          s.sector_left,
          sortKind === 'cheap' && s['sector-selected']
        )}
        onClick={() => setSortKind('cheap')}
      >
        Самый дешевый
      </div>
      <div
        className={clsx(
          s.sector,
          sortKind === 'fast' && s['sector-selected']
        )}
        onClick={() => setSortKind('fast')}
      >
        Самый быстрый
      </div>
      <div
        className={clsx(
          s.sector,
          s.sector_right,
          sortKind === 'optimal' && s['sector-selected']
        )}
        onClick={() => setSortKind('optimal')}
      >
        оптимальный
      </div>
    </div>
  )
}

export default KindSelector