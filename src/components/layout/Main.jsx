import React from 'react';
import './Main.css';
import TodoTable from '../TodoTable';

//Importando Classes do BootStrap
import { } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

export default () =>
    <main>
        {/*Componente para Criação de tarefa*/}

        {/*Componente de tarefas a fazer*/}
        <TodoTable></TodoTable>
        {/*Componente de tarefas feitas */}

    </main>