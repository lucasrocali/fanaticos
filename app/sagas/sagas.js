
import { call, takeEvery, takeLatest, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { AUTHENTIFICATION, GET_TIMES, GET_ATLETAS, GET_TIMELINE } from "../actions/";
// import { loginRequest, gettimesRequest } from "../api/"
import { loginRequest, gettimesRequest, getAtletasRequest, getTimelineRequest } from "../api/mock.js"
import * as selectors from '../reducers/reducers';

const getToken = state => state.reducers.authentication.auth_token;
const getSearch = state => state.reducers.search;

const authenticate = function* (action){
  try {
    yield put({ type: AUTHENTIFICATION.LOADING })

    const login = action.payload.login
    const user_credentials = action.payload.user

    if (login) {
      
      const response = yield call(loginRequest, user_credentials)

      yield put({ type: AUTHENTIFICATION.SUCCESS, response })
      
    } else {

      const response = yield call(signupRequest, user_credentials)

      yield put({ type: AUTHENTIFICATION.SUCCESS, response })
    }

    
  } catch (error) {
    console.log(error);
    yield put({ type: AUTHENTIFICATION.ERROR, error })
  }
};

const gettimes = function* (action){
  try {
    yield put({ type: GET_TIMES.LOADING })

    const token = yield select(getToken)

    const response = yield call(gettimesRequest,token)

    yield put({ type: GET_TIMES.SUCCESS, response })
  } catch (error) {
    console.log(error);
    yield put({ type: GET_TIMES.ERROR, error })
  }
};

const getAtletas = function* (action){
  try {
    yield put({ type: GET_ATLETAS.LOADING })

    const token = yield select(getToken)

    const response = yield call(getAtletasRequest,token)

    yield put({ type: GET_ATLETAS.SUCCESS, response })
  } catch (error) {
    console.log(error);
    yield put({ type: GET_ATLETAS.ERROR, error })
  }
};

const getTimeline = function* (action){
  try {
    yield put({ type: GET_TIMELINE.LOADING })

    const token = yield select(getToken)

    const response = yield call(getTimelineRequest,token)

    yield put({ type: GET_TIMELINE.SUCCESS, response })
  } catch (error) {
    console.log(error);
    yield put({ type: GET_TIMELINE.ERROR, error })
  }
};

export const root = function* () {
  yield takeLatest(AUTHENTIFICATION.SELF, authenticate)
  yield takeLatest(GET_TIMES.SELF, gettimes)
  yield takeLatest(GET_ATLETAS.SELF, getAtletas)
  yield takeLatest(GET_TIMELINE.SELF, getTimeline)
};