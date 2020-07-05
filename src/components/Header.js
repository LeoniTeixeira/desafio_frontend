import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
                <header className='page-header container-fluid py-3 bg-primary shadow-lg '>
                    <row className='d-flex justify-content-between'>
                        <h4 className='text-light my-auto'>To Do List</h4>
                        <div>
                            <span className='text-light my-auto btn btn-primary'>Exportar</span>{/*Botão Exportar*/}
                            <span className='text-light my-auto btn btn-primary'>Tema</span>{/*Botão Mudar Tema*/}
                        </div>
                    </row>
                </header>
        )
    }
}
