import { Button, Checkbox, Form, Input, Select, type SelectItem } from '../../shared';
import { v4 } from 'uuid'
import S from './FeedbackForm.module.css'
import type { FormEventHandler, JSX } from 'react';

export type FeedbackFormProps = JSX.IntrinsicElements['form'];

const cityList: SelectItem[] = [
  {
    id: v4(),
    label: 'Москва',
    value: 'MSK'
  },
  {
    id: v4(),
    label: 'Санкт-Петербург',
    value: 'SPB'
  },
  {
    id: v4(),
    label: 'Омск',
    value: 'OMK'
  },
]

export function FeedbackForm(props: FeedbackFormProps) {

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    const form = event.target as HTMLFormElement;

    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    console.log(data);

    event.preventDefault();
  }

  return (
    <Form {...props} onSubmit={onSubmit}>
      <Input placeholder='Ваше имя' name='firtName'/>
      <Select data={cityList} name="city"/>
      <Checkbox name="confirm">Я принимаю политику конфиденциальности</Checkbox>
      <Button>Отправить форму</Button>
    </Form>
  );
}