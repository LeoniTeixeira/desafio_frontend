import React from 'react';
import './Main.css';
import LoadTable from '../LoadTable';

//Importando Classes do BootStrap
import { } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

import todo from '../../data/todo';
import done from '../../data/done';

export default () =>
    <main>
        {/*Componente para Criação de tarefa*/}

        {/*Componente de tarefas a fazer*/}
        {LoadTable(todo)}
        {/*Componente de tarefas feitas */}
        {LoadTable(done)}
    </main>