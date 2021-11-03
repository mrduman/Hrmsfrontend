import React from 'react'
import { useEffect, useState } from "react"
import { Table } from 'semantic-ui-react'
import EmployeeService from '../services/employeeService'

export default function EmployeeList() {

    const [emplooyes, setEmplooyes] = useState([])

    useEffect(() => {

        let employeeService = new EmployeeService()
        employeeService.getEmployees().then(result => setEmplooyes(result.data.data))


    },[])


    return (

        <Table columns={5}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>E-Mail</Table.HeaderCell>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Password</Table.HeaderCell>

                </Table.Row>
            </Table.Header>

            <Table.Body>
                {emplooyes.map(employee => (

                    <Table.Row key={emplooyes.id}>
                        <Table.Cell>{emplooyes.email}</Table.Cell>
                        <Table.Cell>{emplooyes.firstName}</Table.Cell>
                        <Table.Cell>{emplooyes.lastName}</Table.Cell>
                        <Table.Cell>{emplooyes.password}</Table.Cell>
                    </Table.Row>
                ))}

            </Table.Body>


        </Table>
    )
}