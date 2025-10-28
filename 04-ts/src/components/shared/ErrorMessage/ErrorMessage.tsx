import { Message, type MessageProps } from "../Message/Message";

type ErrorMessageProps = Omit<MessageProps, 'type'>;

export function ErrorMessage(props: ErrorMessageProps) {
  return <Message {...props} type="error"/>
}