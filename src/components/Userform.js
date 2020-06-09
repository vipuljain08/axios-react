import React from 'react'
import './Userform.css'

const Userform = (props) => {
    return (
        <div className="Userform">
            <form onSubmit={props.getUser}>
                <input type="text" name="username" />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Userform