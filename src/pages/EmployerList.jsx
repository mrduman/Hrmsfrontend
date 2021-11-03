
import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import EmployerService from '../services/employerService'


export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(() => {

        let employerService = new EmployerService()
        employerService.getEmployers().then(result => setEmployers(result.data.data))
    }, [])


    return (

        <Table columns={5}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>E-Mail</Table.HeaderCell>
                    <Table.HeaderCell>Password</Table.HeaderCell>
                    <Table.HeaderCell>Company Name</Table.HeaderCell>
                    <Table.HeaderCell>Web Address</Table.HeaderCell>
                    <Table.HeaderCell>Phone Number</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>

                {employers.map(employer => (

                    <Table.Row key = {employers.id}>
                        <Table.Cell>{employers.email}</Table.Cell>
                        <Table.Cell>{employers.password}</Table.Cell>
                        <Table.Cell>{employers.companyName}</Table.Cell>
                        <Table.Cell>{employers.webAddress}</Table.Cell>
                        <Table.Cell>{employers.phoneNumber}</Table.Cell>
                    </Table.Row>
                ))}


            </Table.Body>


        </Table>
    )

}