import React, { Component } from 'react'

export default class Tarefa extends Component {
    render() {
        return (
            <li className='list-group-item text-capitalize d-flex 
              flex-wrap justify-content-between my-2'>
                <input type="checkbox" className='my-auto'/>
                <h6 className='my-auto'>descricao</h6>
                <div >
                    <button type='submit' className='btn btn-success 
                      text-capitalize'>editar</button>
                    <button type='submit' className='btn btn-danger 
                      ml-1 text-capitalize'>apagar</button>
                </div>
            </li>
        )
    }
}
