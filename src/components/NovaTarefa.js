import React, { Component } from 'react'

class NovaTarefa extends Component {
    constructor() {
        super();
        this.state = {value: ''};
        this.addTarefa = this.addTarefa.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addTarefa() {
        this.props.handleAddTarefa(this.state.value);
    }
    
    handleChange(newValue) {
        this.setState({value: newValue});
    }

    render() {
        return (
            <div className='card card-body  my-3'>
                <form>
                    {/*Input de novas tarefas*/}
                    <input type='text' value={this.state.value} 
                      onChange={(e) => this.handleChange(e.target.value)} 
                      className='form-control text-capitalize' 
                      placeholder='adicione uma tarefa'/>
                    <button type='submit' onClick={this.addTarefa} 
                      className='btn btn-block btn-primary 
                      mt-3 text-capitalize'>adicionar tarefa</button>
                </form>
            </div>
        )
    }
}

export default NovaTarefa;