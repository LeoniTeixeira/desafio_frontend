import React from 'react'

//Importando Classes do BootStrap
import { Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

export default () =>
    <header>
        <Navbar  expand="lg" bg="dark" variant="dark">

            {/*logo*/}
            <Navbar.Brand href="#home">ToDoList</Navbar.Brand>

                {/*Botão mudar o tema*/}
                    {/*Criar componente para mudar tema*/}
            
        </Navbar>
    </header>