import axios from "axios"; 
import TYPES from '../Type'
export const getUser = function(name,age){
    return function(dispatch){ //what is the purpose of dispatch
        dispatch({type:TYPES.USER_REQUEST})
     return axios.get("https://jsonplaceholder.typicode.com/users")
     .then(res => (dispatch({type:TYPES.USER_SUCCESS, user:res}),console.log(res.data)))
     .catch(err =>dispatch({type:TYPES.USER_FAILURE}))
    }
}



// How we can get user in user/reducer from getUser?