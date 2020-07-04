import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
                <header className='container-fluid py-3 bg-primary shadow-lg'>
                    <h4 className='text-light'>To Do List</h4>
                </header>
        )
    }
}
