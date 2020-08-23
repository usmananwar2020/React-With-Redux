
import { combineReducers } from "redux"
import {user} from './user'
const rootReducer = combineReducers({
    user,
    animals : ()=> ({
        animals: [
            'dog' , 'cat' , 'cow'
        ]
    })
})

export default rootReducer