import React from 'react';
import { Button, Segment } from 'semantic-ui-react'
import { increaseLikes } from '../../actions/character'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'



class stateLocal extends React.Component {
    state = { likes: 0 }

    addLike = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    };

    render() {
        return (
            <Segment>
                <h1>Local state</h1>
                <Button onClick={this.props.increaseLikes}
                    color='red'
                    content='Like'
                    icon='heart'
                    label={{ basic: true, color: 'red', pointing: 'left', content: this.props.likes }}
                />
                <br/>
                <Link to="/">Go to dashboard</Link>
            </Segment>
            
             );
           
                
           
            

       
    }
}

const mapStateToProps = (state) => ({
    likes: state.character.likes
});

export default connect(mapStateToProps, { increaseLikes })(stateLocal);

