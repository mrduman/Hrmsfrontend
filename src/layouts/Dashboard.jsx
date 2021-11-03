import React from 'react'
import CandidateList from '../pages/CandidateList'
import EmployerList from '../pages/EmployerList'
import EmployeeList from '../pages/EmployeeList'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router'
import SignedIn from './SignedIn'

export default function Dashboard() {
    return (
        <div>



            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/jobSeeker" component={CandidateList}></Route>
                        <Route exact path="/employee" component={EmployeeList}></Route>
                        <Route exact path="/employers" component={EmployerList}></Route>
                        <Route exact path="/jobAdvertisement" component={JobAdvertisementList}></Route>
                        
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
