// const ErrorMessage = withType('error')

import { Message, type MessageProps, type MessageType } from "../Message/Message";

export function withType(type: MessageType) {
  function WithType(props: Omit<MessageProps, 'type'>) {
    return <Message {...props} type={type}/>
  }

  WithType.displayName = `withType(${type})`;
  return WithType;
}