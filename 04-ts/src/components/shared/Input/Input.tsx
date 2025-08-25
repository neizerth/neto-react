import type { JSX } from 'react';
import S from './Input.module.css'
import classNames from 'classnames';

export type InputProps = JSX.IntrinsicElements['input']

export function Input(props: InputProps) {
  return (
    <input {...props} className={classNames(props.className, S.input)}/>
  );
}