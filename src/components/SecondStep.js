import { useState } from "react";

export default function SecondStep(props) {

    const blue = "#2F80ED";
    const red1 = "#EC1115";
    const gray1 = "#F7F7F7";
    const grayInputDate = "#343541";
    const placeholderGray = "#85868D";
    const url = "#";
    
    
    const [firstName, setFirstName] = useState("");
    const [inputFirstNameName, setInputFirstNameName] = useState("");
    const [borderColorInputFirstName, setBorderColorInputFirstName] = useState("");

    const [lastName, setLastName] = useState("");
    const [inputLastNameName, setInputLastNameName] = useState("");
    const [borderColorInputLastName, setBorderColorInputLastName] = useState("");

    const [dateBirth, setDateBirth] = useState("");
    const [inputDateName, setInputDateName] = useState("");
    const [borderColorInputDate, setBorderColorInputDate] = useState("");
    const [colorInputDate, setColorInputDate] = useState("");
    
    const [disableSubmitButton, setDisableSubmitButton] = useState(false);


    //all for input first name
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
        //because there are no first names with 1 letter
        //added check for length
        if(firstName !== "" && firstName[0].toUpperCase() === firstName[0] && firstName.length >= 2){
            setBorderColorInputFirstName(blue);
            setInputFirstNameName("reqForInput");
            if(inputLastNameName === "reqForInput" && inputDateName === "reqForInput"){
                setDisableSubmitButton(false);
            }
        }else {
            setBorderColorInputFirstName(red1);
            setInputFirstNameName("reqNoForInput");
            setDisableSubmitButton(true);
        }

        if(firstName.length === 0){
            setBorderColorInputFirstName(blue);
            setInputFirstNameName("noLengthForInput");
        }
    }

    ////all for input last name 
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
        //because there are no last names with 1 letter
        //added check for length
        if(lastName !== "" && lastName[0].toUpperCase() === lastName[0] && lastName.length >= 2){
            setBorderColorInputLastName(blue);
            setInputLastNameName("reqForInput");
            if(inputFirstNameName === "reqForInput" && inputDateName === "reqForInput"){
                setDisableSubmitButton(false);
            }
        }else {
            setBorderColorInputLastName(red1);
            setInputLastNameName("reqNoForInput");
            setDisableSubmitButton(true);
        }

        if(lastName.length === 0){
            setBorderColorInputLastName(blue);
            setInputLastNameName("noLengthForInput");
        }
    }

    //date input 
    const onFocusDateInput = () => {
        setColorInputDate(grayInputDate);
        if(inputDateName === "reqForInput" || inputDateName === "noLengthForInput") {
            setBorderColorInputDate(blue);
        }
    }

    const onBlurDateInput = () => {
        if(inputDateName === "reqForInput" || inputDateName === "noLengthForInput") {
            setBorderColorInputDate(gray1);
        }

        if(inputDateName === "noLengthForInput"){
            setColorInputDate(placeholderGray);
        }

    }

    //check if date in input date is over eighteen
    //and set disable and alert
    const overEighteen = dateOfBirth => {
        const dayOfBirth = new Date(dateOfBirth);
        const eighteenAgo = new Date();
        eighteenAgo.setFullYear(eighteenAgo.getFullYear() - 18);

        if(dayOfBirth <= eighteenAgo) {
            setBorderColorInputDate(blue);
            setInputDateName("reqForInput");
            if(inputFirstNameName === "reqForInput" && inputLastNameName === "reqForInput"){
            setDisableSubmitButton(false);
            }
        }else {
            setBorderColorInputDate(red1);
            setInputDateName("reqNoForInput");
            setDisableSubmitButton(true);
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
        e.preventDefault();
        props.show(firstName,
            lastName,
            dateBirth,
            false);
        resetForm();   
    }

  return (
    <section className='registration'>
        <header className="registration__headings">
            <h1 className="registration__headings__heading">
                Greate!
            </h1>
            <h1 className=" registration__headings__heading">
                Now your name
            </h1>
        </header>
        <form className="registration__form"
                onSubmit={handleSubmit}>
            <div className="registration__inputdiv">
                <label
                    className="registration__inputdiv__label"
                    htmlFor="firstName">
                    first name
                </label>
                <input
                    className="registration__inputdiv__input"
                    type="text"
                    id="firstName"
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
            <div className="registration__inputdiv">
                <label
                    className="registration__inputdiv__label"
                    htmlFor="lastName">
                    last name
                </label>
                <input
                    className="registration__inputdiv__input"
                    type="text"
                    id="lastName"
                    name={inputLastNameName}
                    style={{
                        borderColor: borderColorInputLastName
                        }  
                    }
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
            <div className="registration__inputdiv">
                <label
                    className="registration__inputdiv__label"
                    htmlFor="date">
                    date of birth
                </label>
                <input
                    className="registration__inputdiv__input registration__inputdiv--inputdate"
                    type="date"
                    id="date"
                    name={inputDateName}
                    style={{
                        borderColor: borderColorInputDate,
                        color: colorInputDate
                        }}
                    onChange = {(e) => {
                        setDisableSubmitButton(true);
                        setDateBirth(e.target.value);
                        overEighteen(e.target.value);
                        setColorInputDate(grayInputDate);
                        }}
                    onFocus= {() => {
                        onFocusDateInput();
                        }}
                    onBlur= {() => {
                        onBlurDateInput();
                        }}
                    value={dateBirth}
                    required
                />
            </div>
            <p className="registration--age">
                You should be minium 18 years old
            </p>
            <div className="registration--divcheck">
                <input
                    className="registration__divcheck--input"
                    type="checkbox"
                    required
                />
                <span>
                    &nbsp;&nbsp;I accept&nbsp;
                </span>
                <a
                    className="registration__divcheck--privacy"
                    href={url}>
                    Privacy Policy
                </a>
            </div>
            <div className="registration__buttons">
                <a
                    className="registration__buttons__login"
                    href={url}>
                    Log in instead
                </a>
                <button
                    className="registration__buttons__button"
                    disabled={disableSubmitButton}>
                    Register
                </button>
            </div>
        </form>
    </section>
  )
}
