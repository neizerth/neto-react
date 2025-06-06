export const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal__body">{children}</div>
    </div>
  );
};
