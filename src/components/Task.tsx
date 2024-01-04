import { TbTrash } from 'react-icons/tb'
import styles from './Task.module.css'
import { ITask } from '../App'
import { BsFillCheckCircleFill } from 'react-icons/bs'

interface Props {
  task: ITask
  onDelete: (taskId: string) => void
  onToggle: (taskId: string) => void
}
export function Task({ task, onDelete, onToggle }: Props) {
  return (
    <div className={styles.task}>
      <button
        onClick={() => {
          onToggle(task.id)
        }}
        className={styles.checkContainer}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ''}>
        {task.title}
      </p>

      <button onClick={() => onDelete(task.id)} className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}
