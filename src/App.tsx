import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

import './styles/global.css'

export interface ITask {
  id: string
  title: string
  isCompleted: boolean
}
export default function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: '1',
      title: 'teste',
      isCompleted: false,
    },
    {
      id: '2',
      title: 'teste 2',
      isCompleted: true,
    },
  ])

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onToggle={toggleTaskCompletedById}
      />
    </>
  )
}