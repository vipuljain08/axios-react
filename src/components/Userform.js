import React from 'react'
import '../styles/Userform.css'

const Userform = (props) => {
    return (
        <div className="Userform">
            <form onSubmit={props.getUser}>
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Userform