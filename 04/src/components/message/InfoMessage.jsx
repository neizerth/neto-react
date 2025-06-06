import { Message } from "./Message";

export const InfoMessage = (props) => {
  return <Message {...props} type="info" />;
};

/*
  const result = {

    type: 'info',
    ...props,
    ...data,
  }

  <Message {...result}/>
*/

// <InfoMessage icon="remove">Вы подписались на меня</InfoMessage>

// <Message icon="remove">Вы подписались на меня</Message>
