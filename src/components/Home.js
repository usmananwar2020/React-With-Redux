import React, { useState } from 'react'
import { connect } from "react-redux";
import { getUser } from '../Redux/Action/getUsers';
import user from './User.css';
import User from './User';
import Form from './Form';

function Home(props) {
    const [search, setSearch] = useState('');
    // const { users, isLoading } = props;
    const getImages = (e) => {
        e.preventDefault();
        console.log('props==',props)
        props.history.push(`/images/${search}`)
    }
    return (
            <Form onSubmit ={getImages} value={search} setSearch={setSearch}/>
    )
}

const mapStateToProps = state => {
    return {
        users: state.user.user,
        isLoading: state.user.isLoading

    }
}
const mapDispatchToProps = dispatch => ({
    iMGettingUSers: (search) => dispatch(getUser(search))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
