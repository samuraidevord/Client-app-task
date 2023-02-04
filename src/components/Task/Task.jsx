import React, {useState} from 'react'
import { deleteTask, updateTaskState } from '../../helpers/alertFunction';
import useTask from '../../hooks/useTask';
import "./Task.css"
const Task = ({task}) => {
    const {listInProgress,setListInProgress,listFinished,setListFinished,handleShowModalFullTask,listBackLog, 
        setListBackLog} = useTask();
    const handleDelete = () => {
        task.state =='In progress' && deleteTask(task,setListInProgress,listInProgress) 
        task.state == 'Finished' && deleteTask(task,setListFinished,listFinished)
        task.state == 'BackLog' && deleteTask(task,setListBackLog,listBackLog)
    }
    const handleState = (e) => {
        e.target.value === 'Finished' && updateTaskState({...task, state: 'Finished'},listFinished,setListFinished,listInProgress,setListInProgress,listBackLog,setListBackLog);
        e.target.value == 'In progress' && updateTaskState({...task, state: 'In progress'},listInProgress,setListInProgress,listFinished,setListFinished,listBackLog,setListBackLog);
        e.target.value == 'BackLog' && updateTaskState({...task, state: 'BackLog'},listBackLog,setListBackLog,listInProgress,setListInProgress,listFinished,setListFinished);
    }
    
  return (
    <div className='task' >
        <h2 className='task-title'>{task.title}</h2>
        <div className='task-state'>
            <div>
                <p>State: </p>
                <select name='selectState' defaultValue={task.state} className='button-state' onChange={handleState}>
                    <option value="In progress">In Progress</option>
                    <option value="Finished">Finished</option>
                    <option value="BackLog">BackLog</option>
                </select>
            </div>
            <div>
                <button className='button-show-modal-task' onClick={() => handleShowModalFullTask(task)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                </button>
                <button className='button-delete' onClick={handleDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
                {
                    (task.state == "In progress" ||  task.state == "BackLog") && (
                    <button className='button-update'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </button>
                    )
                }
                
            </div>
        </div>
    </div>
  )
}

export default Task