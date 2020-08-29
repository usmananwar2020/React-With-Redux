import axios from "axios";
import TYPES from '../Type';

export const getUser = (props) => {
    const App_key="18013370-af3c699485ff1446d7b4bc764";
    const search = props;

    return dispatch => { //what is the purpose of dispatch
        dispatch({ type: TYPES.USER_REQUEST })
// console.log('getuser======',search)
        return axios.get(`https://pixabay.com/api/?key=${App_key}&q=${search}`)
            .then(res => (dispatch({ type: TYPES.USER_SUCCESS, user: res }), console.log(res.data)))
            .catch(err => dispatch({ type: TYPES.USER_FAILURE }))
    }
}



// How we can get user in user/reducer from getUser?