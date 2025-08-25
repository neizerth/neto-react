import type { FormEvent as BaseFormEvent, BaseSyntheticEvent } from "react";

export type FormEvent<T> = BaseSyntheticEvent<
  T, 
  BaseFormEvent<T>, 
  T
>;
