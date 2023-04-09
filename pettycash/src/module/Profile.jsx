const { useState } = require("react");

export default function Profile({url, role}) {
    return (
        <div className="profile">
            <img src={url} className="photo" />
            <span className="role">{role}</span>
        </div>
    );
}