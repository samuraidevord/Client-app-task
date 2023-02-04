import { useContext } from 'react'
import ContextTask from '../context/ContextTask'

const useTask = () => {
    return useContext(ContextTask)
}
export default useTask