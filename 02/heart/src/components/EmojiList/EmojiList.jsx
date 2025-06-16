const data = [
  {
    id: "star",
    character: "⭐",
  },
  {
    id: "shirt",
    character: "👔",
  },
  {
    id: "arm",
    character: "✊",
  },
];
export const EmojiList = () => {
  return (
    <div className="emoji-list">
      {data.map((item) => (
        <span key={item.id} className="emoji-list__item">
          {item.character}
        </span>
      ))}
    </div>
  );
};
