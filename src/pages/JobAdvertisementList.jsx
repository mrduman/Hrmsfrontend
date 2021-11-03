import React from 'react'
import { Table } from 'semantic-ui-react'
import { useState, useEffect } from "react";
import JobAdvertisementService from '../services/jobAdvertisementService';

export default function JobPostList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisements().then(result => setJobAdvertisements(result.data.data))
    }, [])

    return (

        <Table columns={5}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Minumum Salary</Table.HeaderCell>
                    <Table.HeaderCell>Maximum Salary</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Free Positions</Table.HeaderCell>
                    <Table.HeaderCell>Creation Date</Table.HeaderCell>
                    <Table.HeaderCell>Application Deadline</Table.HeaderCell>
                    <Table.HeaderCell>Job Title</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {jobAdvertisements.map(jobAdvertisement => (

                    <Table.Row key={jobAdvertisements.id}>
                        <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
                        <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
                        <Table.Cell>{jobAdvertisement.description}</Table.Cell>
                        <Table.Cell>{jobAdvertisement.freePositions}</Table.Cell>
                        <Table.Cell>{jobAdvertisement.creationDate}</Table.Cell>
                        <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
                        <Table.Cell>{jobAdvertisement.jobPosition.title}</Table.Cell>
                    </Table.Row>

                ))
                }

            </Table.Body>

        </Table>

    )

}

