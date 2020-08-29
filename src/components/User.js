import React, { useState } from 'react'
import { connect } from "react-redux";
import { getUser } from '../Redux/Action/getUsers';
import user from './User.css';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { width } from '@material-ui/system';
import MediaCard from './MediaCard';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Form from "./Form"

const categories = [
    {
        name:'Horses',
        value:'horse'
    },
    {
        name:'Dogs',
        value:'dogs'
    },
    {
        name:'Cats',
        value:'cats'
    },
    {
        name:'Cow',
        value:'cow'
    },
    {
        name:'Sparrow',
        value:'sparrow'
    },
]

function User(props) {
    const { users, isLoading } = props;
    const [search, setSearch] = useState('');
    

    React.useEffect(() => {

        const value = props.history.location.pathname.split('/')[2];
        props.iMGettingUSers(value)
    }, [props.history.location.pathname])
    const getImages = (e) =>{
        e.preventDefault();
        props.history.push(`/images/${search}`)
    } ;

    return (
        <div>
            <div className="sidenav">
                {
                    categories.map(cato =><p onClick={()=>props.history.push(`/images/${cato.value}`)}>{cato.name}</p>)
                }
            </div>
            <div className="container">
                <Form onSubmit={getImages} value={search} setSearch={setSearch} />
                {isLoading ? <CircularProgress color="secondary" /> :

                    <div>
                        {
                            users && users.length && users.map(user =>


                                <MediaCard
                                    name={user.user}
                                    like={user.likes}
                                    comment={user.comments}
                                    favorite={user.favorites}
                                    download={user.downloads}
                                    image={user.largeImageURL}
                                />

                            )
                        }


                    </div>
                }
            </div></div>
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
    iMGettingUSers: (search) => dispatch(getUser(search))
})
export default connect(mapStateToProps, mapDispatchToProps)(User)
