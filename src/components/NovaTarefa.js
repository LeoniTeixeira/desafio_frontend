import React, { Component } from 'react'

export default class NovaTarefa extends Component {
    render() {
        return (
            <div className='card card-body  my-3'>
                <form>
                    <input type='text' className='form-control text-capitalize' 
                        placeholder='adicione uma tarefa'/>
                    <button type='submit' className='btn btn-block btn-primary 
                        mt-3 text-capitalize'>adicionar tarefa</button>
                </form>
            </div>
        )
    }
}
