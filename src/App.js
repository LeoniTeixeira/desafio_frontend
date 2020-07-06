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
        this.state = { lista: [] };
        this.handleAddTarefa = this.handleAddTarefa.bind(this);
        this.handleDeleteTarefa = this.handleDeleteTarefa.bind(this);
    }

    componentDidMount() {
        const lista = window.localStorage.getItem('lista');
        const parsedList = JSON.parse(lista);
        if(lista == null){
            return false
        }
        else{
            this.setState({
                lista: parsedList,
            })
            console.log(this.state.lista);
        }
    }

    handleAddTarefa(descricao) {
        const tarefa = {
            id:uuidv4(), 
            descricao,
            status: false,
        };
        if(localStorage.getItem('lista')==null){
            const lista=[]
            lista.push(tarefa);
            localStorage.setItem('lista',JSON.stringify(lista))
        }
        else{
            const lista=JSON.parse(localStorage.getItem('lista'))
            lista.push(tarefa)
            localStorage.setItem('lista',JSON.stringify(lista))
        }
        this.setState({
            lista:JSON.parse(localStorage.getItem('lista'))
        });
    }

    handleDeleteTarefa(id) {
        const temp=JSON.parse(localStorage.getItem('lista'));
        const filteredItems = temp.filter(tarefa => tarefa.id !== id);
        localStorage.setItem('lista',JSON.stringify(filteredItems));
        
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
                            <ListarTarefa lista={this.state.lista}
                             handleDeleteTarefa={this.handleDeleteTarefa}
                            />
                        </div>
                    </div>
                </main>
            </>
    )}
}