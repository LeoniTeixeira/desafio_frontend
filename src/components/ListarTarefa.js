import React, { Component } from 'react';
import Tarefa from './Tarefa';

export default class ListarTarefa extends Component {
    render() {
        return (
            <ul className='list-group'>
                <h4 className='text-capitalize text-center'>Tarefas</h4>

                <form className='d-flex flex-wrap px-0 mx-0'>
                    <label className='col-8 pl-0' >Filtro: 
                        <input type="text" className='form-control' id="filtro" placeholder="Digite o termo"></input>
                    </label>
                    <label className='col-4 px-0'> Status:
                        <select className='form-control'>
                            <option>Todas</option>
                            <option>Feitas</option>
                            <option>Pendentes</option>
                        </select>
                    </label>
                </form>

                <Tarefa/>
            </ul>
        )
    }
}
