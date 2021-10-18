//import React from 'react'
import { Table } from 'semantic-ui-react'
import CandidateService from '../services/CandidatesService'
import React, { useState, useEffect } from "react";

export default function CandidateList() {


    const [candidates, setCandidates] = useState([])

    useEffect(() =>  {
        
        let candidateService = new CandidateService();
        candidateService.getCandidate().then(result=>setCandidates(result.data.data))

    },[])

    return (
        

        <div>

        <Table inverted celled fixed singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Birth Of Year</Table.HeaderCell>
        <Table.HeaderCell>E-Mail</Table.HeaderCell>
    
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {candidates.map((candidate)=>(
          <Table.Row key={candidate.id}>

        <Table.Cell>{candidate.firstName}</Table.Cell>
        <Table.Cell>{candidate.lastName}</Table.Cell>
        <Table.Cell>{candidate.birthOfYear}</Table.Cell>
        <Table.Cell>{candidate.email}</Table.Cell>

      </Table.Row>
      ))}
      

    </Table.Body>
  </Table>

        </div>
    )
}
