import React, { useState, useEffect } from "react";
import { Table, Header, Icon, Button, Image, Card } from "semantic-ui-react";
import JobSeekerService from "../services/JobSeekerService";

export default function JobseekerList() {

    const [jobseekers, setJobSeekers] = useState([]);
    useEffect(() => {
        let jobSeekerService = new JobSeekerService();
        jobSeekerService.getJobSeekers().then((result) => setJobSeekers(result.data.data));
    }, []);

    return (
        <div>
            <Header as="h2">
            <Icon name="list alternate outline" />
            <Header.Content>Job Seekers</Header.Content>
          </Header>
          <Table color="blue" key="blue">
          </Table>
            <Card.Group>
                {jobseekers.map((jobseeker) =>
                    <Card key={jobseeker.id}>
                        <Card.Content>
                            <Image
                                floated='right'
                                size='mini'
                                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                            />
                            <Card.Header>{jobseeker.firstName} {jobseeker.lastName}</Card.Header>
                            <Card.Meta>BirthDate : {jobseeker.birthDate}</Card.Meta>
                            <Card.Description>
                                {jobseeker.description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green'>
                                    Mesaj
                </Button>
                                <Button basic color='blue'>
                                    Detaylar
                </Button>
                            </div>
                        </Card.Content>
                    </Card>
                )}

            </Card.Group>
        </div>
    );
}