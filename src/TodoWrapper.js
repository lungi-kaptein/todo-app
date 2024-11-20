import React, { useState } from 'react'
import TodoForm from './TodoForm'

const TodoWrapper = () => {
   const [todo, setTodos] = useState([])
  return (
    <div className='TodoWrapper'>
      <TodoForm />
    </div>
  )
}

export default TodoWrapper
