import type { JSX } from 'react';
import S from './Checkbox.module.css'
import classNames from 'classnames';

export type CheckboxProps = Omit<
    JSX.IntrinsicElements['input'], 
    'type'
  > & {
  containerClassName?: string
  controlClassName?: string
}

export function Checkbox({ containerClassName, controlClassName, children, ...props}: CheckboxProps) {
  return (
    <label className={classNames(containerClassName, S.label)}>
      <input {...props} className={classNames(props.className, S.input)} type="checkbox"/>
      <span {...props} className={classNames(controlClassName, S.control)}/>

      {children}
    </label>
  );
}