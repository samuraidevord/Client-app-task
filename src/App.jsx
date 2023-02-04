import ContainerTasks from "./components/ContainerTasks/ContainerTasks"
import FormTask from "./components/FormTask/FormTask"
import ModalTask from "./components/ModalTask/ModalTask"
import NavBar from "./components/Navbar/NavBar"
import useTask from "./hooks/useTask"

function App() {
  const {showModalNewTask,showModalFullTask} = useTask();
  return (
    
    <div className='container'>
        <NavBar/>
        {showModalNewTask && (<FormTask/>)}
        {showModalFullTask && (<ModalTask/>)}
        <ContainerTasks/>
    </div>
  )
}

export default App
