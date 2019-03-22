import {
    SET_LIKES,
} from '../types/character'

export const setLikes = payload => ({
    type: SET_LIKES,
    payload,
})


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