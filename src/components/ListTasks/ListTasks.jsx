import React from 'react'

import Task from '../Task/Task';

import "./ListTasks.css";
const ListTasks = ({listTasksFilter}) => {
  
  return (
    <div className='list-tasks'>
        { 
            listTasksFilter.length > 0 ? (
              listTasksFilter.map((task,index) => (
                <Task key={index} task={task} />
              )) 
            ) : (
              <>
                <br/>
                <h2 className='task-title'>No hay tareas registradas</h2>
              </>
            )
          } 
    </div>
  )
}

export default ListTasks