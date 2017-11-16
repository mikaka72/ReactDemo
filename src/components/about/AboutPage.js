import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';



class AboutPage extends React.Component{
    
        render(){
            return(
                <Segment raised>
                <Container>
                    <Header><h2>About the application</h2></Header>
                    <p>This is a demo application created to learn React. Bootstrap UI was polished with semantic UI</p>
              </Container>
              </Segment>

            );
        }
    
    }
    
    export default AboutPage;