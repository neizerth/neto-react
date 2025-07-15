import S from "./EmojiList.module.css";

export const EmojiList = ({ list }) => {
  return (
    <div>
      {list.map((item) => (
        <div className={S.item} key={item}>
          {item}
        </div>
      ))}
    </div>
  );
};
