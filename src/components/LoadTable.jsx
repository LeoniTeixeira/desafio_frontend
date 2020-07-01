import React from 'react'

//Importando Classes do BootStrap
import { Table, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

export default props => {
    function getTable() {
        return props.map(data => {
            return <tr>
                        <td>{data.atividade}</td>
                    </tr>
        })
    }

    return (
        <Container>
            <br/>
            <Table striped bordered hover>
                <tbody>
                    {getTable()}
                </tbody>
            </Table>
        </Container>
    )
}