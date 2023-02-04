import Swal from 'sweetalert2';
const createTask  = async (data,handleState,list,setList) => {
    await fetch("http://localhost:4000/task/", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(response => response.json())
    .then(data => setList([...list, data.result]), Swal.fire({title: `Tarea creada correctamente`,icon: 'success'}))
    handleState();
} 
const deleteTask = async (task, changeState, list) => {
    const id = task.id;   
    Swal.fire({
            title: 'Estás segu@?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, bórralo!'
    })
    .then(async (result) => {
            if (result.isConfirmed) {
                await fetch("http://localhost:4000/task/" + id, {method: 'DELETE'})
                .then(response => response.json())
                .then(data => Swal.fire({title: `${data.message}`,icon: 'success'}))

                const newListTasks = list.filter( element => {return element.id != id}  );
                changeState(newListTasks);
            }
    });

    
} 
const updateTaskState  = async (dataForm,listSucess,setListSucess,listWrong,setLisWrong,listWrong2,setLisWrong2) => {
    await fetch("http://localhost:4000/task/" + dataForm.id, {
        method: 'PUT',
        body: JSON.stringify(dataForm),
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(response => response.json())
    .then(data => 
        {
            setListSucess([...listSucess, dataForm])
            setLisWrong(listWrong.filter( task => task.id != dataForm.id  ))
            setLisWrong2(listWrong2.filter( task => task.id != dataForm.id  ))
            Swal.fire({title: 'Estado actualizado correctamente!!',icon: 'success'})
        }
    )
    
} 
export { 
    createTask,
    deleteTask,
    updateTaskState
}