import {
    SET_LIKES,
    STATE_RESET,
    CHARACTERS_REQUEST,
    CHARACTERS_SUCCES,
    CHARACTERS_ERROR 
} from '../types/character'

export const fetchCharacterSaga = ()=>({
    type: CHARACTERS_REQUEST,
})

export const fetchedCharacterSucces = payload =>({
    type: CHARACTERS_SUCCES,
    payload
})

export const fetchedCharacterError = payload =>({
    type: CHARACTERS_ERROR,
    payload
})

export const setLikes = payload => ({
    type: SET_LIKES,
    payload,
})

export const setDefaultState = () => ({
    type: STATE_RESET  
  });


export const increaseLikes = () => (dispatch, getState) => {
    const { likes } = getState().character
    const totalLikes = likes + 1
    dispatch(setLikes(totalLikes))
}


export const decreaseLikes = () => (dispatch, getState) => {
    const { likes } = getState().character
    const totalLikes = likes - 1
    if(totalLikes>=0){
        dispatch(setLikes(totalLikes))
    }
}

export const stateReset = () =>(dispatch) => {
    dispatch(setDefaultState())
};