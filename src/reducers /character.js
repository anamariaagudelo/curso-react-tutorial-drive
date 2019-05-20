import Immutable from "seamless-immutable";
import {
  SET_LIKES,
  STATE_RESET,
  CHARACTERS_REQUEST,
  CHARACTERS_ERROR,
  CHARACTERS_SUCCES
} from "../types/character";

const defaultState = Immutable({
  likes: 0,
  characters: [],
  error: "",
  fetching: false
});

export default function character(state = defaultState, action = {}) {
  switch (action.type) {
    case SET_LIKES:
      return state.merge({
        likes: action.payload
      })
    case STATE_RESET:
      return defaultState;
    case CHARACTERS_ERROR:
      return state.merge({
        error: action.payload.err,
        fetching: true,
      });
      case CHARACTERS_SUCCES:
      return state.merge({
        characters: action.payload.characters,
        error:'',
        fetching: false,
      });
      case CHARACTERS_REQUEST:
      return state.merge({
        error: "",
        fetching: true
      })

    default:
      return state;
  }
}
