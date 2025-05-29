import "./StatelessHeart.css";

type StatelessHeartProps = {
  count: number;
  onLike?: () => void;
};

export const StatelessHeart = ({ count, onLike }: StatelessHeartProps) => {
  return (
    <div className="stateless-heart" onClick={onLike}>
      {count}
    </div>
  );
};
