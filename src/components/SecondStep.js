import { useState } from "react";

export default function SecondStep(props) {

    const url = "#";
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    const [allow, setAllow] = useState("");
    
    //function for reset values of inputs
    const resetForm = () => {
        setName("");
        setLastName("");
        setDateBirth("");
    }

    //reset inputs and hide second step/show succes
    const handleSubmit = (e) => {
        e.preventDefault()
        resetForm()
        props.show(name, lastName, dateBirth, false)
    }

    //check if date in input date is over eighteen
    //and set disable and alert
    const overEighteen = dateOfBirth => {
    const dayOfBirth = new Date(dateOfBirth);
    const eighteenAgo = new Date();
    eighteenAgo.setFullYear(eighteenAgo.getFullYear() - 18);
    if (dayOfBirth <= eighteenAgo) {
        setAllow("");
    }else{
        alert("You should be minimum 18 years old - because of that register button is disabled");
    }
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
                        setAllow(true)
                        setDateBirth(e.target.value)
                        overEighteen(e.target.value)
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
                        <button className="second-step-sub-btn" disabled={allow}>Register</button>
                    </div>
            </form>
        </div>
  )
}
