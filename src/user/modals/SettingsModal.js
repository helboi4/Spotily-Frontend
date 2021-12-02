import React from 'react';
import "./modal.css";
import {useState} from "react";

const SettingsModal = ({show, handleClose, userName, userEmail, setUserName, setUserEmail, handleSubmit}) => {

const [isNameDisplayed, setNameDisplayed] = useState(false);
const [isEmailDisplayed, setEmailDisplayed] = useState(false);

function changeNameDisplay() {
    setNameDisplayed(!isNameDisplayed)
}

function changeEmailDisplay() {
    setEmailDisplayed(!isEmailDisplayed)
}

const showHideSettingsModal= show ? "modal display-block" : "modal display-none";

const handleNameChange = (event) => {
    const newUserName = event.target.value
    setUserName(newUserName)
}

const handleEmailChange = (event) => {
    const newUserEmail = event.target.value
    setUserEmail(newUserEmail)
}

    return (
        <div className={showHideSettingsModal}>
            <section classname="modal-main">
                <button className="close-submit" type="button" onClick={handleClose}>Close</button>
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" data-name="Layer 1" viewBox="0 0 29 29"><path d="M14.5,2A12.51408,12.51408,0,0,0,2,14.5,12.52131,12.52131,0,0,0,14.5,27a12.5,12.5,0,0,0,0-25Zm7.60309,19.71283a8.48005,8.48005,0,0,0-15.19873.00824A10.36659,10.36659,0,0,1,4,14.5a10.5,10.5,0,0,1,21,0A10.36807,10.36807,0,0,1,22.10309,21.71283ZM14.5,7A4.5,4.5,0,1,0,19,11.5,4.5,4.5,0,0,0,14.5,7Z"/></svg>
                <form onSubmit={handleSubmit}>
                    <h2>Username:</h2>
                    <h3>{userName}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"/><path fill="none" d="M0 0h48v48h-48z"/></svg>
                    <input type="text" onChange={handleNameChange} placeholder="Edit username"/>
                    <h2>Email Address:</h2>
                    <h3>{userEmail}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"/><path fill="none" d="M0 0h48v48h-48z"/></svg>
                    <input type="text" onChange={handleEmailChange} placeholder="Edit email address"/>
                    <input type="submit"/>
                </form>
            </section>
        </div>

    )

}

export default SettingsModal;