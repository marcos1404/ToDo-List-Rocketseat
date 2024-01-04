import { AiOutlinePlusCircle } from 'react-icons/ai'
import Logo from '../assets/Logo.svg'
import styles from './Header.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Props {
  onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState('')

  function OnChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    onAddTask(title)
    setTitle('')
  }

  return (
    <header className={styles.header}>
      <img src={Logo} alt="" />
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          onChange={OnChangeTitle}
          value={title}
          placeholder="Adicione uma nova tarefa"
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}
