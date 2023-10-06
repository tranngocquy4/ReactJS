import React, { useState } from 'react';
export default function InputTask() {
  const [task, setTask] = useState('');

  function submitForm(e) {
    e.preventDefault();
    console.log(task);
    setTask('');
  }

  function handleInputChange(e) {
    setTask(e.target.value);
  }

  return (
    <div className='formTask'>
      <form onSubmit={submitForm}>
        <input
          type='text'
          placeholder='Task'
          value={task}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
 
}