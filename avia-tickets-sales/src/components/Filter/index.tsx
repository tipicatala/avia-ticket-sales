import Checkbox from '@mui/material/Checkbox';

import s from './Filter.module.scss'

interface ListItem {
  name: string,
  action: Function,
  isActive: boolean,
}

interface Props {
  name: string,
  data: ListItem[],
}

function Filter({ name, data }: Props) {
  return (
    <div className={s.root}>
      <div className={s.title}>
        {name}
      </div>
      <div className={s.list}>
        {data.map(({ action, name, isActive }) => (
          <div className={s.list_item} key={name} onClick={() => action()}>
            <Checkbox checked={isActive}
              classes={{
                root: s.checkbox,
                checked: s.checkbox_checked,
              }}
              sx={{
                color: 'rgba(154, 187, 206, 1)',
              }}
            />
            <div>{name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filter