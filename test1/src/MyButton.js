import React from 'react'
import "./MyButton.css"
const MyButton = ({ title, cs }) =>
(
    <div>
        <button className={cs}>
            {title}
        </button>

    </div>
)

export default MyButton;