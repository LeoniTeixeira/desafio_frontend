import React from 'react'
import atividades from '../data/atividades.js'

import { Table, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

export default props => {
    function getAtividadesTodoTable() {
        return atividades.map(ativ => {
            return <tr>
                        <td>{ativ.atividade}</td>
                    </tr>
        })
    }

    return (
        <Container >
            <h3>ToDo</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Atividades</th>
                    </tr>
                </thead>
                <tbody>
                    {getAtividadesTodoTable()}
                </tbody>
            </Table>
        </Container>
    )
}