import { Message } from "./Message";

export const ErrorMessage = ({ children, ...props }) => {
  return (
    <Message {...props} type="error">
      {children}
    </Message>
  );
};
