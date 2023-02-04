import React from 'react'
import useTask from '../../hooks/useTask'
import "./ModalTask.css"
const ModalTask = () => {
    const {valueInput,setShowModalFullTask,showModalFullTask} = useTask();
  return (
    <div className='container-modal-task'>
        <div className='modal-task'>
            <div className='close-modal-task' onClick={() => setShowModalFullTask(!showModalFullTask)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"      strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            {/* HEADER */}
            <div className='content-modal-header' >
                <div className='header-modal'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    
                    <div>

                        <h2 className='title-modal-task'>
                                Task: <span>#{valueInput.date} - {valueInput.title}</span>
                            </h2>
                        <p>en la lista: <span>{valueInput.state}</span></p>
                    </div>
                </div>
            </div>
            <br/>
            {/* DESCRIPTION */}
            <div className='content-modal-description'>
                <div className='description-modal'>
                        <div style={{"width":"30px","height":"30px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        
                        <div style={{"display":"flex","alignItems":"flex-start", "flexDirection":"column", "marginLeft": "10px"}}>
                            <span>Descripción</span>
                            <br/>
                            <div className='container-ckeditor'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus maxime, blanditiis expedita saepe fuga, ut commodi nemo quibusdam illo a, perferendis ipsum hic. Odit dolor praesentium nisi sit enim pariatur.
                            </div>
                            <div className='action-ckeditor'> 
                                <button className='button-save-ckeditor'>Guardar</button>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"      strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                        
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default ModalTask