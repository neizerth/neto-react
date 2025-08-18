import { useRef, useState } from "react";
import S from "./FeedbackForm.module.css";

export const FeedbackForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { target } = e;

    const formData = new FormData(target);
    const entries = formData.entries();

    const data = Object.fromEntries(entries);

    console.log(data);
    // console.log([...entries]);

    // console.log(formData.get("firstName"));
    // console.log(target.elements.firstName);
  };

  const [firstName, setFirstName] = useState("Владимир");

  const ref = useRef();

  const showInfo = () => {
    const { files } = ref.current;

    console.log(files);
  };

  return (
    <form className={S.container} onSubmit={onSubmit}>
      <div className={S.group}>
        <label htmlFor="firstName" className={S.label}>
          Ваше имя
        </label>

        <input
          placeholder="Ваше имя"
          name="firstName"
          value={firstName}
          // onChange={({ target }) => setFirstName(target.value)}
        />
      </div>
      <div className={S.group}>
        <input type="file" ref={ref} />
        <button type="button" onClick={showInfo}>
          Вывести названия файлов
        </button>
      </div>
      <div className={S.group}>
        <label htmlFor="city" className={S.label}>
          Город
        </label>
        <select name="city">
          <option value={1}>Саратов</option>
          <option value={2}>Керчь</option>
          <option value={3}>Гомель</option>
        </select>
      </div>
      <label className={S.label}>
        <input type="checkbox" name="confirm" value={true} /> Согласен на
        обработку
      </label>
      <div className={S.actions}>
        <button>Отправить</button>
      </div>
    </form>
  );
};
