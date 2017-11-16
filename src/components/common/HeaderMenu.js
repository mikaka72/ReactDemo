import React from 'react';
import { Menu } from 'semantic-ui-react';
import {connect} from 'react-redux';
import { browserHistory} from 'react-router';



class HeaderMenu extends React.Component {

    constructor(props, context){
        super(props, context);
        this.state = {activeItem: 'home'};

        this.handleItemClick = this.handleItemClick.bind(this);
       
    }

    handleItemClick(event, { name }){
        this.setState({ activeItem: name });
        this.redirect(name);
     
    }

    redirect(name){
        browserHistory.push("/"+name);
        
        
    }

    render(){

        const { activeItem } = this.state;

        return (
          
            <Menu>
              <Menu.Item
                name="home"
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              >
                Home
              </Menu.Item>
      
              <Menu.Item
                name="courses"
                active={activeItem === 'courses'}
                onClick={this.handleItemClick}
              >
                Courses
              </Menu.Item>
      
              <Menu.Item
                name="about"
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
              >
                About
              </Menu.Item>
              
            </Menu>
           
          );
    }

}

export default HeaderMenu;
