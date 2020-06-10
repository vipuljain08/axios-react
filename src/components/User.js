import React from 'react'
import Icon from '../pin.svg'
import '../styles/User.css'

const User = ({ user }) => {
    return (
        <div className="User profile-card">
            <div className="img-wrapper">
                <img src={user.avatar_url} alt={user.name} />
            </div>
            <div className="content">
                <div className="name">{user.name}</div>
                <div className="bio">{user.bio}</div>

                <div className="loc">
                    <span className="loc__icon">
                        <img src={Icon} className="loc-logo"  alt="icon" />
                    </span>
                    <span className="loc__txt">{user.location}</span>
                </div>
                <div className="info">
                    <div className="info-item">
                        <div className="info__title">{user.public_repos}</div>
                        <div className="info__txt">Repository</div>
                    </div>
                    <div className="info-item">
                        <div className="info__title">{user.followers}</div>
                        <div className="info__txt">Followers</div>
                    </div>
                    <div className="info-item">
                        <div className="info__title">{user.following}</div>
                        <div className="info__txt">Following</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User