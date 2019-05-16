import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dimmer, Loader } from "semantic-ui-react";
import { increaseLikes,fetchCharacterSaga } from "../../actions/character";
import { decreaseLikes } from "../../actions/character";
import { stateReset } from "../../actions/character";
import List from '../common/list'

class Dashboard extends React.Component {
  state = { likes: 0 };
  componentDidMount(){
      this.props.fetchCharacterSaga()
  }

  render() {
      const {character} = this.props

      if (character.fetching) {return (<Dimmer active><Loader>Loading...</Loader></Dimmer>)}
    return (
      <div>
        {/* <h1>Dashboard likes</h1>
        <Button
          onClick={this.props.increaseLikes}
          color="red"
          content="Like"
          icon="plus"
          label={{
            basic: true,
            color: "red",
            pointing: "left",
            content: this.props.likes
          }}
        />
        <br />
        <br />
        <Button
          onClick={this.props.decreaseLikes}
          content="Like"
          icon="minus"
        />
        <br />
        <br />
        <Button onClick={this.props.stateReset} content="State Reset" />
        <br /> */}
        <Link to="/detail">go to detail Page</Link>
        <br />
        {/* <Link to="/state"> go to State Page</Link> */}
        <h1>Characters List</h1>
        {character.characters.length? (<List characters={character.characters}/>): (<h3>Empty List</h3>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  likes: state.character.likes,
  character: state.character
});

export default connect(
  mapStateToProps,
  {
    increaseLikes,
    decreaseLikes,
    stateReset,
    fetchCharacterSaga
  }
)(Dashboard);
