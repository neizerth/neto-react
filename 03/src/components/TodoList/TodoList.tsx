import { Task, type TodoListTask } from "./Task"

type TodoListProps = {
  tasks: TodoListTask[]
}

export function TodoList({ tasks }: TodoListProps) {
  return (
    <ul>
      {tasks.map(task => (
        <Task {...task} key={task.id}/>
      ))}
    </ul>
  )
}