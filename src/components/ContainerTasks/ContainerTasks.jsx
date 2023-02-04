import React, {useEffect, useState} from 'react'
import ListTasks from '../ListTasks/ListTasks';
import useTask from '../../hooks/useTask';
import "./ContainerTasks.css";
const ContainerTasks = () => {
    const {setListTasks,listFinished,setListFinished,listInProgress,setListInProgress,listBackLog, 
        setListBackLog} = useTask();
    useEffect(() => {
        fetch("http://localhost:4000/tasks")
        .then(response => response.json())
        .then(data => {
            setListTasks(data.result)
            setListInProgress(data.result.filter(task => task.state == 'In progress'))
            setListFinished(data.result.filter(task => task.state == 'Finished'))
            setListBackLog(data.result.filter(task => task.state == 'BackLog'))
            
        })
    }, [])
    return (
        <div className='container-tasks-dad'>
            <h1 className='title-tasks'>Listado de Tareas</h1>

            <div className="container-tasks-list">
                <div className='container-tasks'>
                    <h2 className='title-tasks-h2'>BackLog/StandBy</h2>
                    <ListTasks listTasksFilter={listBackLog}/>
                </div>
                <div className='container-tasks' >
                    <h2 className='title-tasks-h2'>In Progress</h2>
                    <ListTasks listTasksFilter={listInProgress}/>
                </div>
                <div className='container-tasks' >
                    <h2 className='title-tasks-h2'>Finished</h2>
                    <ListTasks listTasksFilter={listFinished}/>
                </div>
            </div>
        </div>
  )
}

export default ContainerTasks