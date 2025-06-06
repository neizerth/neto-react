import { Children } from "react";

export const List = ({ marker, children }) => {
  return (
    <div className="list">
      {Children.map(children, (child) => (
        <div className="list__item">
          {marker}
          {child}
        </div>
      ))}
    </div>
  );
};
