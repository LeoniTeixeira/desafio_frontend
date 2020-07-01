import React from 'react'

//Importando Classes do BootStrap
import { Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

export default () =>
    <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

            {/*logo*/}
            <Navbar.Brand href="#home">ToDoList</Navbar.Brand>

            {/*Componentes para Responsividade*/}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                {/*Botão mudar o tema*/}
                    {/*Criar componente para mudar tema*/}

                {/*Campo para a busca*/}
                    {/*Criar componente de Busca*/}
            </Navbar.Collapse>
        </Navbar>
    </header>