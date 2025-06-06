export const ColorSelect = ({ value, onSelect }) => {
  const getColorClass = (color) => {
    const base = `color color_${color}`;
    return color === value ? `${base} color_selected` : base;
  };

  return (
    <div className="colors">
      <div
        className={getColorClass("black")}
        onClick={() => onSelect("black")}
      />
      <div className={getColorClass("red")} onClick={() => onSelect("red")} />
      <div className={getColorClass("blue")} onClick={() => onSelect("blue")} />
    </div>
  );
};
