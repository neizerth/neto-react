export const Message = ({ type, children }) => {
  return <div className={`message message__${type}`}>{children}</div>;
};
