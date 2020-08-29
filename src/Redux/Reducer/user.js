import TYPES from '../Type'

const initialState = {
    user: null,
    isLoading: false
}

export const user = (state = initialState, action) => {
    switch(action.type)
    {
        case TYPES.USER_REQUEST:
        return {
            isLoading: true
        }
        case TYPES.USER_SUCCESS:
        return {
            isLoading:false,
            user:action.user.data.hits
        }
        case TYPES.USER_FAILURE:
        return{
            isLoading:false
        }
        default:
        return state
    }

}