import { useState } from "react";

import eye from '../assets/eye.svg';

export default function FirstStep(props) {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [type, setType] = useState("password");
    const [passIsGood1, setPassIsGood1] = useState(false);
    const [passIsGood2, setPassIsGood2] = useState(false);
    const [passIsGood3, setPassIsGood3] = useState(false);
    const [allow, setAllow] = useState(false)

    const url = "#"

    const resetForm = () => {
        setEmail("");
        setPass("");
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        resetForm()
        props.show(email, pass, false)
    }

    const validation = (password) => {
        const reqLetter = new RegExp('[a-zA-Z]');
        const reqDigit = new RegExp('[0-9]');
        if(password.length >= 8) {
            setPassIsGood1(true)
        } else {
            setPassIsGood1(false)
        }
        if(reqLetter.test(password)){
            setPassIsGood2(true)
        } else {
            setPassIsGood2(false)
        }
        if(reqDigit.test(password)){
            setPassIsGood3(true)
        } else {
            setPassIsGood3(false)
        }

        if ((password.length >= 8)
            && reqLetter.test(password)
            && reqDigit.test(password)) {
                setAllow(false)
        } else {
            setAllow(true)
        }
    }

  return (
    <div className='registration first-step'>
        <h1 className="h1-grey-1">Ahoy you!</h1>
        <h1 className="h1-grey-2 h1-grey-1">Care to register?</h1>
        <form className="first-form form"
        onSubmit={handleSubmit}>
            <label>email</label>
            <div className="input-div">
                <input type="email"
                onChange ={(e) => {
                    setEmail(e.target.value)
                    }}
                value={email}
                placeholder="Something ending with monterail.com"
                required />
            </div>
            <label>password</label>
            <div className="input-div input-red-border-focus">
                <input className="input"
                type={type}
                onChange = {(e) => {
                    setPass(e.target.value)
                    validation(e.target.value)
                    }}
                value={pass}
                placeholder="Enter your password" 
                required />
                <img src={eye} onClick = {() => {
                    if(type === "password"){
                        setType("text")
                    } else {
                        setType("password")
                    }
                }}
                alt="eye" />
            </div>
            <div className="password-requirements">
                <h2 className="first-req" style={{
                color: passIsGood1 ? "green" : "red"
                }}>At least 8 characters</h2>
                <h2 className="second-req" style={{
                color: passIsGood2 ? "green" : "red"
                }}>At least one letter</h2>
                <h2 className="third-req" style={{
                color: passIsGood3 ? "green" : "red"
                }}>At least one digit</h2>
            </div>
            <div className="container-btn">
                <a href={url}>Log in instead</a>
                <button 
                className="first-step-sub-btn"
                disabled={allow}>Next step
            </button>
            </div>
        </form>
    </div>
  )
}
