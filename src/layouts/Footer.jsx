import React from 'react'
import { Image,  Container,   Divider,  Grid,    Header,   List,  Segment,  Button, } from "semantic-ui-react";

export default function Footer() {
    return (
        <div>
            <Segment
        inverted

        vertical

      >
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={5}>
              <Header inverted as="h4" content="" />

              <Image
                src={"../assets/hrmsfooter.png"}
                size="medium"

                margin="109x"
              />
              <br />
            </Grid.Column>
            <Grid.Column width={5}>
              <Header style={{marginTop:"4em"}} inverted as="h4" content="Social Medya" />
              <br />
              <br />
              <Button circular color="facebook" icon="facebook" />

              <Button circular color="twitter" icon="twitter" />

              <Button circular color="linkedin" icon="linkedin" />

              <Button circular color="google plus" icon="google plus" />
            </Grid.Column>

            <Grid.Column width={6}>
              <Header style={{marginTop:"4em"}} inverted as="h4" content="Doğandemirs" />
              <br />
              <br />
              <p>İş Arayanlar ve İş verenler için buluşma noktası</p>
            </Grid.Column>
          </Grid>

          <Divider inverted section />

          <Image centered size="mini" src={"../assets/hrmslogo.jpg"} circular />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
        </div>
    )
}
