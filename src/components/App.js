import React, {PropTypes} from 'react';
import Header from './common/Header';
import HeaderMenu from './common/HeaderMenu';
import Loading from './common/Loading';
import {connect} from 'react-redux';



class App extends React.Component{

    render(){
        return(
            <div className="container-fluid">
                <HeaderMenu/>
               {this.props.children}
               {this.props.loading && <Loading/>}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {

    return {
        loading: state.ajaxCallsInProgress > 0
       
    };
}



export default connect(mapStateToProps)(App);