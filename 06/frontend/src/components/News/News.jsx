import moment from "moment";
import S from "./News.module.css";

const formatDate = (text) => {
  return moment(text).format("DD.MM HH:mm");
};

export const News = ({ data }) => {
  const sorted = data.toSorted((i1, i2) => (i1.date > i2.date ? 1 : 0));
  return (
    <div className={S.container}>
      {sorted.map((item) => (
        <div key={item.id} className={S.item}>
          <div className={S.date}>{formatDate(item.date)}</div>
          <div className={S.text}>{item.text}</div>
        </div>
      ))}
    </div>
  );
};
