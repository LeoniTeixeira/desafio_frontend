import React from 'react'

export default props => (
    <header className='container-fluid py-3 bg-primary shadow-lg '>
        <div className='d-flex justify-content-between'>
            <h4 className='text-light my-auto'>To Do List</h4>
            <div>
                <span  className='text-dark my-auto btn'>
                  Exportar</span>{/*Botão Exportar*/}

                <span  className='text-dark my-auto btn'>
                  Importar</span>{/*Botão Importar*/}
                  
                <span className='text-dark my-auto btn'>
                  Tema</span>{/*Botão Mudar Tema*/}
            </div>
        </div>
    </header>
)