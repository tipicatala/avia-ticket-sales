
import Checkbox from '@mui/material/Checkbox';

import s from './Filter.module.scss'

interface ListItem {
  name: string,
  action: Function,
  isActive: Function,
}

interface Props {
  name: string,
  data: ListItem[],
  storeData: [],
  setter: Function,
}

function Filter({ name, data, storeData, setter }: Props) {

  return (
    <div className={s.root}>
      <div className={s.title}>
        {name}
      </div>
      <div className={s.list}>
        {data.map(({ action, name, isActive }) => (
          <div className={s.list_item} key={name} onClick={() => action({ storeData, setter })}>
            <Checkbox checked={isActive({ storeData })}
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