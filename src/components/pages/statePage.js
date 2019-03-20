import React from 'react';
import { Button, Segment } from 'semantic-ui-react'


class stateLocal extends React.Component {
    state = { likes: 0 }

    addLike = () => {
        this.setState({
            likes: this.state.likes + 1
        });
    }

    render() {
        const { likes } = this.state

        return (
            <Segment>
                <h1>Local state</h1>
            <Button onClick= {this.addLike}
                color='red'
                content='Like'
                icon='heart'
                label={{basic:true, color:'red', pointing:'left',content: likes}}
                />
            </Segment>

        );
    }
}

export default stateLocal;
