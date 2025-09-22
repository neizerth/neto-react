import { useState } from "react"
import { Task, type TodoListTask } from "./Task"

type TodoListProps = {
  tasks: TodoListTask[]
}

export function DynamicTodoList(props: TodoListProps) {
  const [tasks, setTasks] = useState(props.tasks);

  const removeTask = (id: string) => {
    setTasks(data => data.filter(task => task.id !== id))
  }

  const toggleStatus = (id: string) => {
    console.log(id)
    setTasks(data => data.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done
        }
      }
      return task
    }))
  }

  return (
    <ul>
      {tasks.map(task => (
        <Task {...task} 
          key={task.id} 
          onStatusToggle={() => toggleStatus(task.id)}
          onRemove={() => removeTask(task.id)}
        />
      ))}
    </ul>
  )
}