import s from './Ticket.module.scss'

interface Segment {
  id: string;
  origin: string;
  destination: string;
  dateStart: string;
  dateEnd: string;
  stops: [];
  duration: number;
}

interface Data {
  id: string;
  price: number;
  companyId: string;
  segments: Segment[];
}

function Ticket({ price, companyId, segments } :Data) {

  return (
    <div className={s.root}>
      <div className={s.top}>
        <div className={s.price}>{price}</div>
        <div className={s.logo}>{companyId}</div>
      </div>
      <div>
        {segments.map(({ origin, destination, dateStart, dateEnd, duration, stops, id}) => (
          <div className={s.segment} key={id}>
            <div className={s.overview}>
              <div className={s.title}>{origin} - {destination}</div>
              <div className={s.value}>{dateStart} - {dateEnd}</div>
            </div>
            <div className={s.overview}>
              <div className={s.title}>в пути</div>
              <div className={s.value}>{duration}</div>
            </div>
            <div className={s.overview}>
              <div className={s.title}>{stops.length} пересадки</div>
              <div className={s.value}>{stops.join(', ')}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ticket