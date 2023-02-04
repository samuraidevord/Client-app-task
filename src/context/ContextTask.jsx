
import {createContext, useState } from "react";
// Creación del contexto

const ContextTask = createContext(); 


const TaskProvider = ({children}) => {
    const title = 'AppTasks | Víctor Manuel Ordiales García';
    const [showModalNewTask, setShowModalNewTask] = useState(false);
    const [showModalFullTask, setShowModalFullTask] = useState(false);
    const [listTasks, setListTasks] = useState([]);
    const [listFinished, setListFinished] = useState([]);
    const [listInProgress, setListInProgress] = useState([]);
    const [listBackLog, setListBackLog] = useState([]);
    const [valueInput, setValueInput] = useState({
        title: '',
        description: '',
        state: 'In progress'
    })
    
    const handleChangeValueInput = e => {
        setValueInput({
            ...valueInput,
            [e.target.name] : e.target.value
        })
    }
    const handleShowModalNewTask = () =>  {
        setShowModalNewTask(!showModalNewTask);
    }
    const handleShowModalFullTask = (task) =>  {
        setShowModalFullTask(!showModalFullTask);
        setValueInput(task);
    }
    
    return (
        <ContextTask.Provider
            value={{
                title,
                showModalNewTask,
                handleShowModalNewTask,
                listTasks,
                setListTasks,
                listFinished,
                setListFinished,
                listInProgress, 
                setListInProgress,
                listBackLog, 
                setListBackLog,
                valueInput, 
                setValueInput,
                handleChangeValueInput,
                showModalFullTask, 
                setShowModalFullTask,
                handleShowModalFullTask
            }}
            >
                {children}
        </ContextTask.Provider>
    )
}

export {TaskProvider}
export default ContextTask;