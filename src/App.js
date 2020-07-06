import React, { Component } from 'react'
import Header from './components/Header'
import NovaTarefa from './components/NovaTarefa'
import ListarTarefa from './components/ListarTarefa'

import { v4 as uuidv4 } from 'uuid';

//Classes Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
    constructor() {
        super();
        this.state = { tarefas: [] };
        this.handleAddTarefa = this.handleAddTarefa.bind(this);
    }

    handleAddTarefa(descricao) {
        const tarefas = {
            id:uuidv4(), 
            descricao,
            status: false,
        };
        if(localStorage.getItem('lista')==null){
            const lista=[]
            lista.push(tarefas);
            localStorage.setItem("lista",JSON.stringify(lista))
        }
        else{
            const lista=JSON.parse(localStorage.getItem('lista'))
            lista.push(tarefas)
            localStorage.setItem("lista",JSON.stringify(lista))
        }
        this.setState({
            lista:JSON.parse(localStorage.getItem('lista'))
        });
    }

    render() {
        return (
            <>
                <Header/>
                <main className='container-fluid'>
                    <div className='row'>
                        <div className='mx-auto col-md-8 mt-4'>
                            <h3 className='text-capitalize text-center'>Lista de Tarefas</h3>
                            <NovaTarefa handleAddTarefa={this.handleAddTarefa}/>
                            <ListarTarefa/>
                        </div>
                    </div>
                </main>
            </>
    )}
}