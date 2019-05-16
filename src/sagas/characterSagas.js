import { call, put } from "redux-saga/effects";
import {
  fetchedCharacterSucces,
  fetchedCharacterError
} from "../actions/character";
import api from "../api";


export function* fetchCharacterSaga(action){
    try{
        const characters = yield call(
            api.characters.fetchAll
        )
        yield put(fetchedCharacterSucces(characters))
    }catch(err){
        yield put(fetchedCharacterError(err.reponse))
    }
}