import React from 'react'

export default props => (
    <li className='list-group-item text-capitalize d-flex 
      flex-wrap justify-content-between my-2'>
        {/*Status da Tarefa 'Feita(true)/Pendente(false)'*/}
        <input type="checkbox" className='my-auto'/>

        {/*Descrição da tarefa*/}
        <h6 className='my-auto'>descricao</h6>

        {/*Botões de Editar e Apagar Tarefa*/}
        <div>
            <button type='submit' className='btn btn-success 
              text-capitalize'>editar</button>
            <button type='submit' className='btn btn-danger 
              ml-1 text-capitalize'>apagar</button>
        </div>
    </li>
)