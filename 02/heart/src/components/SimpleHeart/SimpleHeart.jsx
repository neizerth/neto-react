export function SimpleHeart() {
  let count = 0;

  const onClick = () => {
    count++;
    console.log(count);
  };
  return (
    <button className="heart" onClick={onClick}>
      🫶 {count}
    </button>
  );
}
