import { AUTHENTIFICATION, GET_TIMES, GET_ATLETAS, LOGOUT, GET_TIMELINE } from '../actions';

const initial_uthentication = {
  loading: false,
  message: "",
  success: false,
  user: {}
}

const initialState = {
  authentication: initial_uthentication,
  get_count: 1,
  times: {
    loading: false,
    message: "",
    current_matches: {}
  },
  atletas: {
    loading: false,
    message: "",
    atletas: []
  },
  timeline: {
    loading: false,
    message: "",
    posts: [],
    placar: {}
  }
}

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case AUTHENTIFICATION.SELF:

      return { ...state,
                  authentication: initial_uthentication
              }
    case AUTHENTIFICATION.LOADING:
      return { ...state,
                  authentication: {
                    ...state.authentication,
                    loading: true,
                  },
              };
    case AUTHENTIFICATION.ERROR:
      return { ...state,
                  authentication: {
                    ...state.authentication,
                    loading: false,
                    message: "Error",
                  },
              };
    case AUTHENTIFICATION.SUCCESS:
      var auth_token = action.response.auth_token
      var success = auth_token != null ? true : false;
      return { ...state,
                authentication: {
                  ...state.authentication,
                  auth_token: auth_token,
                  loading: false,
                  success: success,
                  message:  action.response.message,
                },
      };
    case GET_TIMES.LOADING:
      return { ...state,
                  times: {
                    ...state.times,
                    loading: true,
                  },
              };
    case GET_TIMES.ERROR:
      return { ...state,
                  times: {
                    ...state.times,
                    loading: false,
                  },
              };
     case GET_TIMES.SUCCESS:
      var message = action.response.message != null ? action.response.message : null
      var current_matches = message == null && action.response ? action.response : {}
      return { ...state,
                times: {
                  ...state.times,
                  loading: false,
                  message:  action.response.message,
                  current_matches: current_matches
                },
      };
      case GET_ATLETAS.LOADING:
      return { ...state,
                  atletas: {
                    ...state.atletas,
                    loading: true,
                  },
              };
    case GET_ATLETAS.ERROR:
      return { ...state,
                  atletas: {
                    ...state.atletas,
                    loading: false,
                  },
              };
     case GET_ATLETAS.SUCCESS:
      var message = action.response.message != null ? action.response.message : null
      var atletas = message == null && action.response ? action.response.elenco : []
      return { ...state,
                atletas: {
                  ...state.atletas,
                  loading: false,
                  message:  action.response.message,
                  atletas: atletas
                },
      };
      case GET_TIMELINE.LOADING:
      return { ...state,
                  timeline: {
                    ...state.timeline,
                    loading: true,
                  },
              };
    case GET_TIMELINE.ERROR:
      return { ...state,
                  timeline: {
                    ...state.timeline,
                    loading: false,
                  },
              };
     case GET_TIMELINE.SUCCESS:
     console.log(action)
      var message = action.response && action.response.message != null ? action.response.message : null
      var posts = message == null && action.response ? action.response : []
      // var placar = message == null && action.response ? action.response.placar : {}
      // var posts = all_posts.slice((all_posts.length - state.get_count) >= 0 ? all_posts.length - state.get_count : 0, all_posts.length);
      // //console.log(posts)
      // //console.log(state.get_count)
      // var new_atletas = state.atletas && state.atletas.atletas ? state.atletas.atletas : []
      // posts && posts.map((lance) => {
      //   if (lance && lance.jogador && lance.jogador.atleta_id) {

      //     new_atletas.map((atleta) => {
      //       if (atleta.id == lance.jogador.atleta_id) {
      //         atleta.new_story = true;
      //       }
      //     })
      //   }
      // })
      // new_atletas.sort(function(a,b) {return a.new_story ? 1 : 0 } ); 
      // new_atletas.reverse()
      //console.log(state)
      return { ...state,
                get_count: state.get_count += 1,
                timeline: {
                  ...state.timeline,
                  loading: false,
                  message: message,
                  posts: posts
                },
                atletas: {
                  ...state.atletas,
                  atletas: []
                }
      };
    case LOGOUT.SELF:
      return initialState;
    default:
    return state
  }
}
export function getMessage(state) {
  if (state.reducers.authentication.message && state.reducers.authentication.message.length > 0) {

    return state.reducers.authentication.message

  } else  if (state.reducers.times.message && state.reducers.times.message.length > 0) {

    return state.reducers.times.message

  }
  return ""
}

export function isLoading(state) {
  return state.reducers.authentication.loading;
}

export function isAuthenticationLoading(state) {
  return state.reducers.authentication.loading
}

export function isAuthenticated(state) {
  return state.reducers.authentication.success
}

export function gettimes(state) {
  // //console.log(state)
  return state.reducers.times.current_matches
}

export function getCurrentMatches(state) {
  return state.reducers.times.current_matches.jogos ? state.reducers.times.current_matches.jogos :[]
}

export function getCurrentDay(state) {
  console.log(state.reducers.times.current_matches.data_hoje)
  return state.reducers.times.current_matches.data_hoje != null ? state.reducers.times.current_matches.data_hoje : "No date"
}

export function getAtletas(state) {
  // //console.log(state)
  return state.reducers.atletas.atletas
}

export function getPosts(state) {
  return state.reducers.timeline.posts.reverse()
}

export function getPlacar(state) {
  return state.reducers.timeline.placar
}