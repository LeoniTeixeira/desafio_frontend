import React from 'react'

export default props => (
    <div className='card card-body  my-3'>
        <form>
            {/*Input de novas tarefas*/}
            <input type='text' className='form-control text-capitalize' 
                placeholder='adicione uma tarefa'/>
            <button type='submit' className='btn btn-block btn-primary 
                mt-3 text-capitalize'>adicionar tarefa</button>
        </form>
    </div>
)

