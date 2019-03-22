import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {increaseLikes} from '../../actions/character'

class Dashboard extends React.Component{
    state ={}

    render(){
        return(
            <div>
                <h1>Dashboard likes</h1>
                <button onClick= {this.props.increaseLikes}>like to this character</button>
                <br/>
                <Link to="/detail">go to detail Page</Link>
                <br/>
                <Link to="/state"> go to State Page</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    likes : state.character.likes
})

export default connect(mapStateToProps, {increaseLikes})(Dashboard);
