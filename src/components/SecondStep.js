import { useState } from "react";



export default function SecondStep(props) {

    const url = "#";
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    
    const resetForm = () => {
        setName("");
        setLastName("");
        setDateBirth("");
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        resetForm()
        props.show(name, lastName, dateBirth, false)
    }

  return (
    <div className='registration second-step'>
            <h1 className="h1-grey-1">Greate!</h1>
            <h1 className="h1-grey-2 h1-grey-1">Now your name</h1>
            <form className="first-form form"
            onSubmit={handleSubmit}>
                <label>first name</label>
                <div className="input-div">
                    <input type="text"
                    onChange ={(e) => {
                        setName(e.target.value)
                    }}
                    value={name}
                    placeholder="e.g. Jessica"
                    required />
                </div>
                <label>last name</label>
                    <div className="input-div">
                    <input className="input"
                    type="text"
                    onChange = {(e) => {
                        setLastName(e.target.value)
                    }}
                    value={lastName}
                    placeholder="e.g. Walton" 
                    required />
                </div>
                <label>date of birth</label>
                    <div className="input-div">
                    <input className="input"
                    type="date"
                    onChange = {(e) => {
                        setDateBirth(e.target.value)
                    }}
                    value={dateBirth}
                    required />
                </div>
                <h2 className="password-requirements">You should be minium 18 years old</h2>
                <div className="input-div-check">
                        <input className="input-check" type="checkbox" required />
                        <span className="txt">&nbsp;&nbsp;I accept&nbsp;</span>
                        <a className="txt" href={url} >Privacy Policy</a>
                    </div>
                    <div className="container-btn">
                        <a href={url}>Log in instead</a>
                        <button className="second-step-sub-btn" type="submit">Register</button>
                    </div>
            </form>
        </div>
  )
}
