import Immutable from 'seamless-immutable'
import {
    SET_LIKES,
    STATE_RESET
} from '../types/character'


const defaultState = Immutable({
    likes : 0
})


export default function character(state = defaultState, action ={}) {
    switch ( action.type) {
        case SET_LIKES:
            return state.merge({
                likes: action.payload,
            });
            case STATE_RESET:
            return defaultState;
            default:
            return state
    }
}