export const StatelessHeart = ({ count, onLike }) => {
  return (
    <div className="heart" onClick={onLike}>
      {count}
    </div>
  );
};
