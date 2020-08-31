import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { getUser } from '../Redux/Action/getUsers';
import './User.css';
import User from './User';
import Form from './Form';

function Home(props) {
    const [search, setSearch] = useState('');
    // const { users, isLoading } = props;
    const getImages = (e) => {
        e.preventDefault();
        console.log('props==', props)
        props.history.push(`/images/${search}`)
    }
    return (
        <div style={{marginTop:150}}>
        <h1 className="h1-search">Stunning free images & royalty free stock</h1>
        <p className="h1-search">Popular Images: -covid trip, wallpaper, -tpose, -vrouwekathedraal, abacate, abacaxi,<br/> abajur, abandoned hall, abandoned stair, 
            abc alphabet, abgrenzung, abiertas, above view</p>
            <Form onSubmit={getImages} value={search} setSearch={setSearch} />
        </div>
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
