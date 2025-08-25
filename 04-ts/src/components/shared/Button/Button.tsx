import type { JSX } from 'react';
import S from './Button.module.css'
import classNames from 'classnames';

export type ButtonProps = JSX.IntrinsicElements['button']

export function Button(props: ButtonProps) {
  return (
    <button {...props} className={classNames(props.className, S.button)}/>
  );
}