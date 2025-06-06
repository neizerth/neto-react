import { Modal } from "../Modal/Modal";

export const HeadingModal = ({ title, url }) => {
  return (
    <Modal>
      <h2 className="modal__title">{title}</h2>
      <a href={url}>Посмотреть подробнее</a>
    </Modal>
  );
};
