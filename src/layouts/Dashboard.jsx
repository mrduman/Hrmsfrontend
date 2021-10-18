import React from 'react'
import CandidateList from '../pages/CandidateList'
import Categories from './Categories'
import Navi from './Navi'
import { Grid } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>

            
            <Categories />
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <CandidateList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
