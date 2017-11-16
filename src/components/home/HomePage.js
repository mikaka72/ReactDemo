import React from 'react';
import {Link} from 'react-router';
import { Segment } from 'semantic-ui-react'

class HomePage extends React.Component{

    render(){
        return(
            <Segment raised>
                 <h1>Admin page</h1>
                 <p> React and redux web apps demo home page </p>
                 
          </Segment>
            
        );
    }

}

export default HomePage;

/*<div className="jumbotron">
                <h1>Admin page</h1>
                <p> React and redux web apps.. </p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>*/