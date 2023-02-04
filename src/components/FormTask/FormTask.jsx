import "./FormTask.css"
import { createTask} from '../../helpers/alertFunction.js';
import useTask from "../../hooks/useTask";

const FormTask = () => {
    const {listInProgress,setListInProgress,listFinished,setListFinished,valueInput,handleShowModalNewTask,handleChangeValueInput,listBackLog,setListBackLog} = useTask();
    const handleSubmit = async (e) => {
        console.log(valueInput.state);
        e.preventDefault();
        valueInput.state == 'In progress' && createTask(valueInput,handleShowModalNewTask,listInProgress,setListInProgress);
        valueInput.state == 'Finished'  && createTask(valueInput,handleShowModalNewTask,listFinished,setListFinished);
        valueInput.state == 'BackLog'  && createTask(valueInput,handleShowModalNewTask,listBackLog,setListBackLog);
    }
  return (
    <div className='container-form-create-task'>
        <div className="form-create-task">
            <p className='text-form-create-task'>New Task:</p>
            <form method='posty' className='form' onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" name='title' placeholder='Title' value={valueInput.title} onChange={e => handleChangeValueInput(e)}/>

                <label htmlFor="description">Description:</label>
                <input type="text" name='description' placeholder='Description' value={valueInput.description} onChange={e => handleChangeValueInput(e)}/>

                <label htmlFor="state">State:</label>
                <div className='check-radio-button-state'>
                     <div>
                        <input type='radio' name='state' id='state1' value='BackLog' onClick={e => handleChangeValueInput(e)} />
                        <label htmlFor="state1">BackLog</label>
                    </div>
                    <div>
                        <input type='radio' name='state' id='state2' value='In progress' onClick={e => handleChangeValueInput(e)}  /> 
                        <label htmlFor="state2">In progress</label>
                    </div>
                    <div>
                        <input type='radio' name='state' id='state3' value='Finished' onClick={e => handleChangeValueInput(e)} />
                        <label htmlFor="state3">Finished</label>
                    </div>
                    
                </div>
                <button type='submit'>Add Task</button>
            </form>
        </div>
    </div>
  )
}

export default FormTask