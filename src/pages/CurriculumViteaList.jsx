import { useEffect, useState } from "react";
import { Table } from 'semantic-ui-react'
import CurriculumViteaService from '../services/curriculumVitaeService'

export default function CurriculumViteaList() {


    const [curriculumViteas, setCurriculumViteas] = useState([])

    useEffect(() => {

        let curriculumViteaService = new CurriculumViteaService()
        curriculumViteaService.getCurriculumVitae().then(result => setCurriculumViteas(result.data.data))
    }, [])

    return (


        <Table columns={5}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Github Adress</Table.HeaderCell>
                    <Table.HeaderCell>Linkendin Adress</Table.HeaderCell>
                    <Table.HeaderCell>Cover Letter</Table.HeaderCell>
                    <Table.HeaderCell>Education</Table.HeaderCell>
                    <Table.HeaderCell>Education Department</Table.HeaderCell>
                    <Table.HeaderCell>Graduated </Table.HeaderCell>
                    <Table.HeaderCell>Programming Language </Table.HeaderCell>
                    <Table.HeaderCell>Company Name </Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>

                {curriculumViteas.map(curriculumVitea => (

                    <Table.Row key={curriculumViteas.id}>
                        <Table.Cell>Jill</Table.Cell>
                        <Table.Cell>Denied</Table.Cell>
                        <Table.Cell>22</Table.Cell>
                        <Table.Cell>Other</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                    </Table.Row>

                ))}


            </Table.Body>

        </Table>


    )
}