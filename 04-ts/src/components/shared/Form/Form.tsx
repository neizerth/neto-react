import type { JSX } from 'react';
import S from './Form.module.css'
import classNames from 'classnames';

export type FormProps = JSX.IntrinsicElements['form']

export function Form(props: FormProps) {
  return (
    <form {...props} className={classNames(props.className, S.form)}/>
  );
}