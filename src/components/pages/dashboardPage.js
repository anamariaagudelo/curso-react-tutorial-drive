import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

class Dashboard extends React.Component{
    state ={}

    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <Link to="/detail">go to detail Page</Link>
                /
                <Link to="/state"> State Page</Link>
                <br/>
                <h3>likes from redux: {this.props.likes}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    likes : state.character.likes
})

export default connect(mapStateToProps, {})(Dashboard);
