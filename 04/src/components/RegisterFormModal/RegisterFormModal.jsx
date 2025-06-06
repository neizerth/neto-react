import { Modal } from "../Modal/Modal";

export const RegisterFormModal = () => {
  return (
    <Modal>
      <form class="form">
        <div className="form__group">
          <input type="text" name="username" placeholder="Введите имя" />
        </div>
        <div className="form__group">
          <input type="email" name="email" placeholder="Введите E-mail" />
        </div>
      </form>
    </Modal>
  );
};
