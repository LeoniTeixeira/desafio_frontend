import React from 'react'

export default props => (
    <li className='list-group-item text-capitalize d-flex 
      flex-wrap justify-content-between my-2'>
        {/*Status da Tarefa 'Feita(true)/Pendente(false)'*/}
        <input type="checkbox" className='my-auto'/>

        {/*Descrição da tarefa*/}
        <span className='my-auto col-sm-9'>descricao</span> 

        {/*Botões de Editar e Apagar Tarefa*/}
        <div>
            <button type='submit' className='btn btn-success px-3'>
                Editar</button>
            <button type='submit' className='btn btn-danger ml-1'>
                Apagar</button>
        </div>
    </li>
)