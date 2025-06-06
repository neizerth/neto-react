import { Widget } from "../Widget/Widget";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Widget title="О нас">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsa?
        Magni officiis aperiam voluptatibus architecto rem beatae deserunt!
        Laborum nisi autem sint, iure quae eius iusto. Minima quos unde non.
      </Widget>
      <Widget title="Соцсети">
        <a href="/linked">LinkedIn</a>
        <a href="/vk">VK</a>
        <a href="/reddit">Reddit</a>
      </Widget>
    </aside>
  );
};
