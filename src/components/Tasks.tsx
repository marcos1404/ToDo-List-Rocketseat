import { ClipboardText } from '@phosphor-icons/react'
import styles from './Tasks.module.css'
import { Task } from './Task'
import { ITask } from '../App'

interface Props {
  tasks: ITask[]
  onDelete: (taskId: string) => void
  onToggle: (taskId: string) => void
}

export function Tasks({ tasks, onDelete, onToggle }: Props) {
  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter((task) => task.isCompleted).length
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </div>

      {tasks.length <= 0 && (
        <div className={styles.listEmpty}>
          <div>
            <ClipboardText size={56} />
          </div>

          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            Crie tarefas e organize seus itens a fazer
          </div>
        </div>
      )}
    </section>
  )
}
