import React, { Component } from 'react'
import Header from './components/Header'
import NovaTarefa from './components/NovaTarefa'
import ListarTarefa from './components/ListarTarefa'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
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
