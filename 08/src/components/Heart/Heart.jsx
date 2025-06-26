import { useDispatch, useSelector } from "react-redux";
import S from "./Heart.module.css";
import { addLikes, resetLikes } from "../../store/actionCreators";

export const Heart = () => {
  const dispatch = useDispatch();
  const count = useSelector(({ likes }) => {
    return likes.likes;
  });

  const onLike = () => {
    dispatch(addLikes());
  };

  const reset = () => {
    dispatch(resetLikes());
  };

  return (
    <>
      <div className={S.container} onClick={onLike}>
        {count} 🧡
      </div>
      <button onClick={reset}>Сброс</button>
    </>
  );
};
