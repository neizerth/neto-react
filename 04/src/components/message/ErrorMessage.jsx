import { Message } from "./Message";

export const ErrorMessage = ({ children }) => {
  return <Message type="error">{children}</Message>;
};
