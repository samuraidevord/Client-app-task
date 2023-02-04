import React from 'react'
import useTask from '../../hooks/useTask';
import "./NavBar.css"
const NavBar = () => {
    const {showModalNewTask,handleShowModalNewTask} = useTask();
  return (
    <nav>
        <h2 className='title-logo-nav'>AppTasks</h2>
        <button className='button-create-task-nav' onClick={handleShowModalNewTask}>
            {
               showModalNewTask ? 
                (   
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    
                ) :
                (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            }
            <p>New Task</p>
        </button>

    </nav>
  )
}

export default NavBar