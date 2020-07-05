import React, { Component } from 'react'
import Header from './components/Header'
import NovaTarefa from './components/NovaTarefa'
import ListarTarefa from './components/ListarTarefa'

//Classes Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Config IndexedDB
import IndexedDB from './data/IndexedDB';


export default class App extends Component {
    constructor() {
        super();
        this.state = { tarefas: [] };
        this.handleAddTarefa = this.handleAddTarefa.bind(this);
    }

    componentDidMount() {
        IndexedDB.table('tarefas')
          .toArray()
          .then((tarefas) => {
            this.setState({ tarefas });
        });
    }

    handleAddTarefa(descricao) {
        const tarefa = {
          descricao,
          status: false,
        };
        IndexedDB.table('tarefas')
          .add(tarefa)
          .then((id) => {
            const newList = [...this.state.todos, Object.assign({}, tarefa, { id })];
            this.setState({ tarefas: newList });
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
