import React from 'react';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { increaseLikes } from '../../actions/character'
import { decreaseLikes } from '../../actions/character'

class Dashboard extends React.Component {
    state = { likes: 0 }

    render() {
       
        return (
            <div>
                <h1>Dashboard likes</h1>
                <Button onClick={this.props.increaseLikes}
                    color='red'
                    content='Like'
                    icon='plus'
                    label={{ basic: true, color: 'red', pointing: 'left', content: this.props.likes }}
                />
                <br />
                <br/>
                <Button onClick={this.props.decreaseLikes}
                    content='Like'
                    icon='minus'
               
                />
                <br />
                <Link to="/detail">go to detail Page</Link>
                <br />
                <Link to="/state"> go to State Page</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    likes: state.character.likes
})

export default connect(mapStateToProps, 
    { increaseLikes,
        decreaseLikes 
    })(Dashboard);
