import React, { Component } from 'react'

export default class Tarefa extends Component {
    render() {
        return (
            <li className='list-group-item text-capitalize d-flex 
              justify-content-between my-4 flex-wrap'>
                <input type="checkbox" className='my-auto'/>
                <h6 className='my-auto'>descricao</h6>
                <div className='my-auto'>
                    <button type='submit' className='btn btn-success 
                      my-auto text-capitalize'>editar</button>
                    <button type='submit' className='btn btn-danger 
                      ml-1 my-auto text-capitalize'>Apagar</button>
                </div>
            </li>
        )
    }
}
