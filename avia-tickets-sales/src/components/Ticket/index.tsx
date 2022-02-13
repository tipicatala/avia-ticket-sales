import allSegments from '../../data/segments.json'

import { S7Logo, XiamenAirLogo } from '../../images'

import s from './Ticket.module.scss'
interface Data {
  id: string;
  price: number;
  companyId: string;
  segments: string[];
}

function Ticket({ price, companyId, segments }: Data) {
  const resolveLogo = (companyId: string) => {
    if ("7dc12d0b-ce42-48a0-8673-0dad4d698764" === companyId) {
      return <XiamenAirLogo />
    }

    return <S7Logo/>
  }

  const convertHourMinutes = (duration:number) => {
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((duration / (1000 * 60)) % 60)

    const parsedMinutes = minutes < 10 ? '0' + minutes : minutes
    const parsedHours = hours < 10 ? '0' + hours : hours

    return {
      duration: <>{hours}ч {minutes ? (<>{minutes}м</>) : null }</>,
      time: <>{parsedHours}:{parsedMinutes}</>
    }
  }

  const filteredSegments = allSegments.filter(segment => segments.includes(segment.id))

  return (
    <div className={s.root}>
      <div className={s.top}>
        <div className={s.price}>
          {price.toLocaleString('ru')} P
        </div>
        <div className={s.logo}>
          {resolveLogo(companyId)}
        </div>
      </div>
      <div className={s.segments}>
        {filteredSegments.map(({
          origin,
          destination,
          dateStart,
          dateEnd,
          duration,
          stops, 
          id,
        }) => (
          <div className={s.segment} key={id}>
            <div className={s.overview}>
              <div className={s.title}>{origin} - {destination}</div>
              <div className={s.value}>
                {convertHourMinutes(dateStart).time} - {convertHourMinutes(dateEnd).time}
              </div>
            </div>
            <div className={s.overview}>
              <div className={s.title}>в пути</div>
              <div className={s.value}>
                {convertHourMinutes(duration).duration}
              </div>
            </div>
            <div className={s.overview}>
              <div className={s.title}>
                {stops?.length ? (
                  <>{stops?.length} пересадки</>
                ): 'прямой'}
              </div>
              <div className={s.value}>{stops?.join(', ')}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ticket