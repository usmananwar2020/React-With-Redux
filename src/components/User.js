import React,{useState} from 'react'
import { connect } from "react-redux";
import { getUser } from '../Redux/Action/getUsers';
import user from './User.css';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
function User(props) {
    const { users, isLoading } = props;
//where the props come?
    const onGetUsers = () => props.iMGettingUSers()
    return (
        <div >
            <div className="divbtn"><Button className="button" variant="contained" color='primary'  onClick={onGetUsers}><p>GET USERS</p></Button></div>

            {isLoading ?       <CircularProgress color="secondary"  /> : <ul >
                {
                    users && users.length && users.map(user => <li className='user'><div className="contant"><h3>{user.name} , { user.username} , {user.email}</h3></div></li>)
                }
            </ul>}
        </div>
    )
}
//where the  (state) come from???
const mapStateToProps = state => {
    return {
        users: state.user.user,
        isLoading: state.user.isLoading
    }
}
const mapDispatchToProps = dispatch => ({
    iMGettingUSers: () => dispatch(getUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(User)
