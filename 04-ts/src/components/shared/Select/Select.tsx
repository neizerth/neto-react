import type { JSX } from 'react';
import S from './Select.module.css'
import classNames from 'classnames';

export type SelectItem = {
  id: string
  label: string
  value: string
}

export type SelectProps = JSX.IntrinsicElements['select'] & {
  data: SelectItem[]
}

export function Select({ data, ...props }: SelectProps) {
  return (
    <select {...props} className={classNames(props.className, S.select)}>
      {data.map(item => (
        <option key={item.id} value={item.value}>{item.label}</option>
      ))}
    </select>
  );
}