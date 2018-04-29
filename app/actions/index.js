import reduxTypesCreator from "./ReduxTypesCreator";
const actionTypes = reduxTypesCreator('AUTHENTIFICATION', 'GET_TIMES', 'GET_ATLETAS', 'GET_TIMELINE' , 'LOGOUT' ); // types

export const { AUTHENTIFICATION, GET_TIMES, GET_ATLETAS, GET_TIMELINE, LOGOUT } = actionTypes;

export function login(user) {
	return {
	    type: AUTHENTIFICATION.SELF,
	    payload: {
	    	login: true,
	    	user: user
	    }
  }
}

export function signup(name,email,password,password_confirmation) {
	return {
	    type: AUTHENTIFICATION.SELF,
	    payload: {
	    	login: false,
	    	name: name,
		    email: email,
		    password: password,
		    password_confirmation: password_confirmation
	    }
  }
}

export function loadTimes() {
	return {
	    type: GET_TIMES.SELF
  }
}

export function loadAtletas() {
	return {
	    type: GET_ATLETAS.SELF
  }
}


export function logout() {
	return {
	    type: LOGOUT.SELF
  }
}
