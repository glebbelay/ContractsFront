import React from "react";
import "../css/profile.css"

function Profile() {
    return(
        <div className="container">
            <label className="rows">Name</label>
            <p className="name rows">Ivan</p>
            <label className="rows">Surname</label>
            <p className="surname rows">Shishkin</p>
        </div>
    )

}
export default Profile