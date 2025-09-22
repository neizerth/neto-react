export type TodoListTask = {
  id: string
  title: string
  done?: boolean
}

type TaskProps = TodoListTask & {
  onStatusToggle?: () => void;
  onRemove?: () => void 
}


export function Task({ title, done, onStatusToggle, onRemove }: TaskProps) {
  const status = done ? '✅' : '🕐';

  return (
    <div>
      <button onClick={onStatusToggle}>{status}</button> 
      {title}
      <button onClick={onRemove}>⛔</button>
    </div>
  )
}