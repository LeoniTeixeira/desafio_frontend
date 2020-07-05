import React, { Component } from 'react'
import Header from './components/Header'
import NovaTarefa from './components/NovaTarefa'
import ListarTarefa from './components/ListarTarefa'

//Classes Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Config IndexedDB
import IndexedDB from './data/IndexedDB';


export default class App extends Component {
    componentDidMount() {
        IndexedDB.table('tarefas')
          .toArray()
          .then((tarefas) => {
            this.setState({ tarefas });
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
                            <NovaTarefa/>
                            <ListarTarefa/>
                        </div>
                    </div>
                </main>
            </>
    )}
}
