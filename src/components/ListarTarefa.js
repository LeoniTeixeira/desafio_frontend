import React from 'react';
import Tarefa from './Tarefa';

export default props => (
    <ul className='list-group'>
        <h4 className='text-capitalize text-center'>Tarefas</h4>
        <form className='d-flex flex-wrap px-0 mx-0'>
            {/*Filtro por termo na tarefa*/}
            <label className='col-8 pl-0' >Filtro: 
                <input type="text" className='form-control' id="filtro"
                  placeholder="Digite o termo"></input>
            </label>

            {/*Filtro por status da tarefa*/}
            <label className='col-4 px-0'> Status:
                <select className='form-control'>
                    <option>Todas</option>
                    <option>Feitas</option>
                    <option>Pendentes</option>
                </select>
            </label>
        </form>

        {/*Lista de tarefas*/}
        <Tarefa/>
    </ul>
)

