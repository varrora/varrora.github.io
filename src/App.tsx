import { FormEvent, useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Checkbox from './componets/Checkbox'
import TodoMapModel from './models/TodoMapModel'
import TodoModel from './models/TodoModel'
import { useDarkMode, useLocalStorage } from 'usehooks-ts'


export default function App () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [todos, setTodos] = useLocalStorage<TodoMapModel>('todos', {})
  const [height, setHeight] = useState(0)
  function addTodo (text: string) {
    const currentTodos = { ...todos }
    const id = uuidv4()
    const todo = new TodoModel(id, text, false)
    currentTodos[id] = todo
    setTodos(currentTodos)
  }
  function checkTodo (id: string) {
    const currentTodos = { ...todos }
    currentTodos[id].checked = !currentTodos[id].checked
    setTodos(currentTodos)
  }
  function deleteTodo (id: string) {
    const currentTodos = { ...todos }
    delete currentTodos[id]
    setTodos(currentTodos)
  }
  function handleSubmit (e: FormEvent) {
    e.preventDefault()
    const inputValue = inputRef.current?.value!.replace(/\s/g, '') ?? ''
    if (inputValue == '') return
    addTodo(inputValue)
    inputRef.current!.value = ''
  }
  useEffect(() => {
    
  })
  
  return (
    <div className='App flex flex-col items-center p-8 gap-3 bg-primary'>
      <form onSubmit={handleSubmit} className='flex gap-3 absolute bottom-0'>
        <input
          ref={inputRef}
          className='bg-secondary rounded-full py-4 px-6 text-lg md:text-sm md:py-2 md:px-4 outline-none text-primary hover:text-accent focus:text-accent'
        />
        <button
          type='submit'
          className='font-semibold bg-secondary text-primary py-4 px-6 md:py-2 md:px-4 rounded-full hover:bg-accent hover:text-black focus:opacity-75'
        >
          Add
        </button>
      </form>
      <p>{height}</p>
      <div className='flex flex-col gap-2 items-start w-80' style={{paddingTop: 0}}>
        {Object.values(todos).map(todo => (
          <Checkbox
            key={todo.id}
            text={todo.text}
            checked={todo.checked}
            onChecked={() => {
              checkTodo(todo.id)
            }}
            onDelete={() => {
              deleteTodo(todo.id)
            }}
          />
        ))}
      </div>
    </div>
  )
}
