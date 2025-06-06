export const Widget = ({ title, children }) => {
  return (
    <div className="widget">
      <h2 className="widget__title">{title}</h2>
      <div className="widget__content">{children}</div>
    </div>
  );
};
