import type { PropsWithChildren } from "react";
import "./Content.css";

type ContentProps = PropsWithChildren;

export const Content = ({ children }: ContentProps) => {
  return <div className="content">{children}</div>;
};
