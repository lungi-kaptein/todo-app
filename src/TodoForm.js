import React, {useState} from 'react'

const TodoForm = () => {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <form>
      <input type="text" className='todo-input'
       placeholder='What is todays task?' onChange=
       {(e) => setValue(e.target.value)}/>
       <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
