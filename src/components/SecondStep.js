import { useState } from "react";

export default function SecondStep(props) {

    const blue = "#2F80ED";
    const red1 = "#EC1115";
    const gray1 = "#F7F7F7";
    const url = "#";
    
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    const [inputFirstNameName, setInputFirstNameName] = useState("");
    const [inputLastNameName, setInputLastNameName] = useState("");
    const [inputDateName, setInputDateName] = useState("");

    const [borderColorInputFirstName, setBorderColorInputFirstName] = useState("");
    const [borderColorInputLastName, setBorderColorInputLastName] = useState("");
    const [borderColorInputDate, setBorderColorInputDate] = useState("");
    
    const [allow, setAllow] = useState(false);


    //first name
    const onFocusFirstNameInput = () => {
        if(inputFirstNameName === "reqForInput" || inputFirstNameName === "noLengthForInput") {
            setBorderColorInputFirstName(blue);
        }
    }

    const onBlurFirstNameInput = () => {
        if(inputFirstNameName === "reqForInput" || inputFirstNameName === "noLengthForInput") {
            setBorderColorInputFirstName(gray1);
        } 
    }

    //function to check firs name input
    const checkingFirstName = firstName => {
        
        if(firstName !== "" && firstName[0].toUpperCase() === firstName[0] && firstName.length >= 2){
            setBorderColorInputFirstName(blue);
            setInputFirstNameName("reqForInput");
            if(inputLastNameName === "reqForInput" && inputDateName === "reqForInput"){
                setAllow(false);
            }

        }else{
            setBorderColorInputFirstName(red1);
            setInputFirstNameName("reqNoForInput");
            setAllow(true);
        }

        if(firstName.length === 0){
            setBorderColorInputFirstName(blue);
            setInputFirstNameName("noLengthForInput");
        }
    }

    ////last name 
    const onFocusLastNameInput = () => {
        if(inputLastNameName === "reqForInput" || inputLastNameName === "noLengthForInput") {
            setBorderColorInputLastName(blue);
        }
    }

    const onBlurLastNameInput = () => {
        if(inputLastNameName === "reqForInput" || inputLastNameName === "noLengthForInput") {
            setBorderColorInputLastName(gray1);
        }
    }

    //function to check last name input
    const checkingLastName = lastName => {
    
        if(lastName !== "" && lastName[0].toUpperCase() === lastName[0] && lastName.length >= 2){
            setBorderColorInputLastName(blue);
            setInputLastNameName("reqForInput");
            if(inputFirstNameName === "reqForInput" && inputDateName === "reqForInput"){
                setAllow(false);
            }

        }else{
            setBorderColorInputLastName(red1);
            setInputLastNameName("reqNoForInput");
            setAllow(true);
        }

        if(lastName.length === 0){
            setBorderColorInputLastName(blue);
            setInputLastNameName("noLengthForInput");
        }
    }

    //date input 
    const onFocusDateInput = () => {
        if(inputDateName === "reqForInput" || inputDateName === "noLengthForInput") {
            setBorderColorInputDate(blue);
        }
    }

    const onBlurDateInput = () => {
        if(inputDateName === "reqForInput" || inputDateName === "noLengthForInput") {
            setBorderColorInputDate(gray1);
        }
    }

    //check if date in input date is over eighteen
    //and set disable and alert
    const overEighteen = dateOfBirth => {
    const dayOfBirth = new Date(dateOfBirth);
    const eighteenAgo = new Date();
    eighteenAgo.setFullYear(eighteenAgo.getFullYear() - 18);

    if (dayOfBirth <= eighteenAgo) {
        setBorderColorInputDate(blue);
        setInputDateName("reqForInput");
        if(inputFirstNameName === "reqForInput" && inputLastNameName === "reqForInput"){
        setAllow(false);
        }
    }else{
        setBorderColorInputDate(red1);
        setInputDateName("reqNoForInput");
        setAllow(true);
    }

    if(dateOfBirth === "") {
        setBorderColorInputDate(blue);
        setInputDateName("noLengthForInput");
    }
}

    //function for reset values of inputs
    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setDateBirth("");
    }

    //reset inputs and hide second step/show succes
    const handleSubmit = (e) => {
        e.preventDefault()
        props.show(firstName,
            lastName,
            dateBirth,
            false)
        resetForm()    
    }

  return (
    <div className='registration second-step'>
            <h1 className="h1-grey-1">
                Greate!
            </h1>
            <h1 className="h1-grey-2 h1-grey-1">
                Now your name
            </h1>
            <form className="first-form form"
                onSubmit={handleSubmit}>
                <label>first name</label>
                <div className="input-div">
                    <input type="text"
                        name={inputFirstNameName}
                        style={{
                            borderColor: borderColorInputFirstName
                            }}
                        onChange ={(e) => {
                            setFirstName(e.target.value)
                            checkingFirstName(e.target.value)
                            }}
                        onFocus= {() => {
                            onFocusFirstNameInput()
                            }}
                        onBlur= {() => {
                            onBlurFirstNameInput()
                            }}
                        value={firstName}
                        placeholder="e.g. Jessica"
                        required
                    />
                </div>
                <label>last name</label>
                    <div className="input-div">
                    <input className="input"
                        type="text"
                        name={inputLastNameName}
                        style={{
                            borderColor: borderColorInputLastName
                            }}
                        onChange = {(e) => {
                            setLastName(e.target.value)
                            checkingLastName(e.target.value)
                            }}
                        onFocus= {() => {
                            onFocusLastNameInput()
                            }}
                        onBlur= {() => {
                            onBlurLastNameInput()
                            }}
                        value={lastName}
                        placeholder="e.g. Walton" 
                        required
                    />
                </div>
                <label>date of birth</label>
                    <div className="input-div">
                    <input className="input"
                        type="date"
                        name={inputDateName}
                        style={{
                            borderColor: borderColorInputDate
                            }}
                        onChange = {(e) => {
                            setAllow(true)
                            setDateBirth(e.target.value)
                            overEighteen(e.target.value)
                            }}
                        onFocus= {() => {
                            onFocusDateInput()
                            }}
                        onBlur= {() => {
                            onBlurDateInput()
                            }}
                        value={dateBirth}
                        required
                    />
                </div>
                <h2 className="password-requirements">
                    You should be minium 18 years old
                </h2>
                <div className="input-div-check">
                    <input className="input-check"
                        type="checkbox"
                        required
                    />
                    <span className="txt">
                        &nbsp;&nbsp;I accept&nbsp;
                    </span>
                    <a className="txt"
                        href={url}>
                        Privacy Policy
                    </a>
                </div>
                <div className="container-btn">
                    <a href={url}>
                        Log in instead
                    </a>
                    <button className="second-step-sub-btn"
                        disabled={allow}>
                        Register
                    </button>
                </div>
            </form>
        </div>
  )
}
