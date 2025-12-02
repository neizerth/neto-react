import { useId, useRef, useState } from "react";
import S from "./FeedbackForm.module.css";

export const FeedbackForm = () => {
  const firstNameId = useId();
  const cityId = useId();

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
        <label htmlFor={firstNameId} className={S.label}>
          Ваше имя
        </label>

        <input
          placeholder="Ваше имя"
          name="firstName"
          id={firstNameId}
          value={firstName}
          // onChange={({ target }) => setFirstName(target.value)}
        />
        <input
          placeholder="Ваша Фамилия"
          name="lastName"
          defaultValue="Языков"
        />
      </div>
      <div className={S.group}>
        <input type="file" ref={ref} />
        <button type="button" onClick={showInfo}>
          Вывести названия файлов
        </button>
      </div>
      <div className={S.group}>
        <label htmlFor={cityId} className={S.label}>
          Город
        </label>
        <select name="city" id={cityId}>
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
