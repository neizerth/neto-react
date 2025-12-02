import { About } from "../About/About";
import { Social } from "../Social/Social";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <About />
      <Social />
    </aside>
  );
};
