import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
                <header className='container-fluid py-3 bg-primary shadow-lg '>
                    <row className='d-flex justify-content-between'>
                        <h4 className='text-light my-auto'>To Do List</h4>
                        <h4 className='text-light my-auto btn'>Tema</h4>
                    </row>
                </header>
        )
    }
}
