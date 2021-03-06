import React from 'react'
import Button from '@material-ui/core/Button';

function Form({onSubmit , value='Flowers', setSearch}) {

    return (
        <form className="search-form" onSubmit={onSubmit}>
                <input type="text" value={value} className="search-bar" placeholder="Search Over 1.8 million+ high quality stock images "  onChange={e => setSearch(e.target.value)}/>
                <div className="divbtn">
                    <Button className="button" type='submit' variant="contained" color='primary' >
                        <p>Search</p>
                    </Button>
                </div>
            </form>
    )
}

export default Form
