import { useState } from "react";

export default function FirstStep(props) {

    const blue = "#2F80ED";
    const red1 = "#EC1115";
    const gray1 = "#F7F7F7";
    const greenRequirements = "green";
    const redRequirements = "red";
    const grayRequirements = "#343541";
    const url = "#";

    const [email, setEmail] = useState("");
    const [inputEmailName, setInputEmailName] = useState("");
    const [borderColorInputEmail, setBorderColorInputEmail] = useState("");

    const [pass, setPass] = useState("");
    const [inputPasswordName, setInputPasswordName] = useState("");
    const [typePasswordInput, setTypePasswordInput] = useState("password");
    const [passwordReguirementCharacters, setPasswordReguirementCharacters] = useState("");
    const [passwordReguirementLetter, setPasswordReguirementLetter] = useState("");
    const [passwordReguirementDigit, setPasswordReguirementDigit] = useState("");
    const [borderColorInputPassword, setBorderColorInputPassword] = useState("");

    const [disableSubmitButton, setDisableSubmitButton] = useState(false);
    
    ////all for input email

    const onFocusEmailInput = () => {
        if(inputEmailName === "reqForInput" || inputEmailName === "noLengthForInput") {
            setBorderColorInputEmail(blue);
        }
    }

    const onBlurEmailInput = () => {
        if(inputEmailName === "reqForInput" || inputEmailName === "noLengthForInput") {
            setBorderColorInputEmail(gray1);
        }else if(inputEmailName === "reqNoForInput") {
            /*alert('Email have to: 1) End with monterail.com 2) Contain @ 3) Have some value before @')*/
        }
    }

    //function to check email input
    const checkEmailRequirements = email => {
        //at the end need to have "monterail.com" contain @ and sth before @ optional alert (finally not used)
        const reqMonte = new RegExp(/monterail.com$/gi);
        const reqAt = new RegExp(/[@]/g);
        const reqBeforeAt = new RegExp(/.+@/g);
    
        if(reqBeforeAt.test(email) && reqAt.test(email) && reqMonte.test(email)){
            setBorderColorInputEmail(blue);
            setInputEmailName("reqForInput");
            if(inputPasswordName === "reqForInput"){
                setDisableSubmitButton(false);
            }
        }else {
            setBorderColorInputEmail(red1);
            setInputEmailName("reqNoForInput");
            setDisableSubmitButton(true);
        }

        if(email.length === 0){
            setBorderColorInputEmail(blue);
            setInputEmailName("noLengthForInput");
        }
    }

    ////all for input password

    const onFocusPasswordInput = () => {
        if(inputPasswordName === "reqForInput" || inputPasswordName === "noLengthForInput") {
            setBorderColorInputPassword(blue);
        }
    }

    const onBlurPasswordInput = () => {
        if(inputPasswordName === "reqForInput" || inputPasswordName === "noLengthForInput") {
            setBorderColorInputPassword(gray1);
        }

    }

    //function for check requriments for password
    //and set disable in button 
    const validation = (password) => {
        const reqLetter = new RegExp('[a-zA-Z]');
        const reqDigit = new RegExp('[0-9]');

        if(password.length >= 8) {
            setPasswordReguirementCharacters(greenRequirements);
        }else {
            setPasswordReguirementCharacters(redRequirements);
            setInputPasswordName("reqNoForInput");
            setBorderColorInputPassword(red1);
        }

        if(reqLetter.test(password)){
            setPasswordReguirementLetter(greenRequirements);
            
        }else {
            setPasswordReguirementLetter(redRequirements);
            setInputPasswordName("reqNoForInput");
            setBorderColorInputPassword(red1);
        }

        if(reqDigit.test(password)){
            setPasswordReguirementDigit(greenRequirements);
        }else {
            setPasswordReguirementDigit(redRequirements);
            setInputPasswordName("reqNoForInput");
            setBorderColorInputPassword(red1);
        }

        if((password.length >= 8)
            && reqLetter.test(password)
            && reqDigit.test(password)) {
                setInputPasswordName("reqForInput");
                setBorderColorInputPassword(blue);
                if(inputEmailName === "reqForInput"){
                    setDisableSubmitButton(false);
                }
        }else {
            setDisableSubmitButton(true);
        }

        if(password.length === 0){
            setBorderColorInputPassword(blue);
            setInputPasswordName( "noLengthForInput");
            setPasswordReguirementCharacters(grayRequirements);
            setPasswordReguirementLetter(grayRequirements);
            setPasswordReguirementDigit(grayRequirements);
        }
    }

    //reset for inputs
    const resetForm = () => {
        setEmail("");
        setPass("");
    }

    //function for submit - reset inputs
    //and hide first step/show second step
    const submitFirtstStepRegistration = (e) => {
        e.preventDefault();
        resetForm();
        props.show(email, pass, false);
    }

  return (
    <section>

        <header>
            <h1 >
                Ahoy you!
            </h1>
            <h1 >
                Care to register?
            </h1>
        </header>

        <form onSubmit={submitFirtstStepRegistration}>

            <div>  
                <label htmlFor="email">
                    email
                </label>
                <input
                    type="email"
                    id="email"
                    name={inputEmailName}
                    style={{
                        borderColor: borderColorInputEmail
                        }}
                    onChange ={(e) => {
                        setEmail(e.target.value)
                        checkEmailRequirements(e.target.value)
                        }}
                    onFocus= {() => {
                        onFocusEmailInput()
                        }}
                    onBlur= {() => {
                        onBlurEmailInput()
                        }}
                    value={email}
                    placeholder="Something ending with monterail.com"
                    required
                />
            </div>

            <div>
                <label htmlFor="password">
                    password
                </label>
                <input
                    type={typePasswordInput}
                    id="password"
                    name={inputPasswordName}
                    style={{
                        borderColor: borderColorInputPassword
                        }}
                    onChange = {(e) => {
                        setPass(e.target.value)
                        validation(e.target.value)
                        }}
                    onFocus= {() => {
                        onFocusPasswordInput()
                        }}
                    onBlur= {() => {
                        onBlurPasswordInput()
                        }}
                    value={pass}
                    placeholder="Enter your password" 
                    required
                />
                <button
                    type="button"
                    onClick = {() => {
                            if(typePasswordInput === "password"){
                                setTypePasswordInput("text")
                            } else {
                                setTypePasswordInput("password")
                            }
                        }}>
                </button>
            </div>

            <div className="registration--password-requirements">
                <p
                    style={{
                        color: passwordReguirementCharacters 
                        }}>
                    At least 8 characters
                </p>
                <p
                    style={{
                        color: passwordReguirementLetter
                        }}>
                    At least one letter
                </p>
                <p
                    style={{
                        color: passwordReguirementDigit
                        }}>
                    At least one digit
                </p>
            </div>

            <div className="registration__buttons">
                <a href={url}>
                    Log in instead
                </a>
                <button disabled={disableSubmitButton}>
                    Next step
                </button>

            </div>

        </form>
        
    </section>
  )
}
