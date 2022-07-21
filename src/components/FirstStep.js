import { useState } from "react";

export default function FirstStep(props) {

    const blue = "#2F80ED";
    const red1 = "#EC1115";
    const gray1 = "#F7F7F7";
    const url = "#";

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [inputPasswordName, setInputPasswordName] = useState("");
    const [typeInput, setTypeInput] = useState("password");
    const [passReguirementCharacters, setPassReguirementCharacters] = useState(false);
    const [passReguirementLetter, setPassReguirementLetter] = useState(false);
    const [passReguirementDigit, setPassReguirementDigit] = useState(false);
    const [allow, setAllow] = useState(false);
    
   
    const [borderColorInputEmail, setBorderColorInputEmail] = useState("");
    const [inputEmailName, setInputEmailName] = useState("")
    const [borderColorInputPassword, setBorderColorInputPassword] = useState("");


    const onFocusEmailInput = () => {
        if(inputEmailName === "reqForInput" || inputEmailName === "noLengthForInput") {
            setBorderColorInputEmail(blue);
        }
    }

    const onBlurEmailInput = () => {
        if(inputEmailName === "reqForInput" || inputEmailName === "noLengthForInput") {
            setBorderColorInputEmail(gray1);
        } else if(inputEmailName === "reqNoForInput") {
            /*alert('Email have to: 1) End with monterail.com 2) Contain @ 3) Have some value before @')*/
        }
    }

    //function to check email input
    const checkingEmail = email => {
        //at the end need to have "monterail.com" contain @ and sth before @ optional alert (finally not used)
        const reqMonte = new RegExp(/monterail.com$/gi);
        const reqAt = new RegExp(/[@]/g);
        const reqStart = new RegExp(/.+@/g)
    
        if(reqStart.test(email) && reqAt.test(email) && reqMonte.test(email)){
            setBorderColorInputEmail(blue);
            setInputEmailName("reqForInput");
            if(inputPasswordName === "reqForInput"){
                setAllow(false)
            }
        }else{
            setBorderColorInputEmail(red1);
            setInputEmailName("reqNoForInput");
            setAllow(true);
        }
        if(email.length === 0){
            setBorderColorInputEmail(blue);
            setInputEmailName("noLengthForInput");
        }
    }

    ////input password req

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

    //function to reset values of inputs
    const resetForm = () => {
        setEmail("");
        setPass("");
    }

    //function for submit - reset inputs
    //and hide first step/show second step
    const handleSubmit = (e) => {
        e.preventDefault()
        resetForm()
        props.show(email, pass, false)
    }

    //function for check requriments for password
    //and set disable in button 
    const validation = (password) => {
        const reqLetter = new RegExp('[a-zA-Z]');
        const reqDigit = new RegExp('[0-9]');
        if(password.length >= 8) {
            setPassReguirementCharacters(true);
        } else {
            setPassReguirementCharacters(false);
            setInputPasswordName("reqNoForInput");
            setBorderColorInputPassword(red1);
        }
        if(reqLetter.test(password)){
            setPassReguirementLetter(true);
            
        } else {
            setPassReguirementLetter(false);
            setInputPasswordName("reqNoForInput");
            setBorderColorInputPassword(red1);
        }
        if(reqDigit.test(password)){
            setPassReguirementDigit(true);
        } else {
            setPassReguirementDigit(false);
            setInputPasswordName("reqNoForInput");
            setBorderColorInputPassword(red1);
        }

        if ((password.length >= 8)
            && reqLetter.test(password)
            && reqDigit.test(password)) {
                setInputPasswordName("reqForInput");
                setBorderColorInputPassword(blue);
                if(inputEmailName === "reqForInput"){
                    setAllow(false);
                }
        } else {
            setAllow(true)
        }
        if (password.length === 0){
            setBorderColorInputPassword(blue);
            setInputPasswordName( "noLengthForInput");
        }
    }

  return (
    <div className='registration first-step'>
        <h1 className="h1-grey-1">
            Ahoy you!
        </h1>
        <h1 className="h1-grey-2 h1-grey-1">
            Care to register?
        </h1>
        <form className="first-form form"
            onSubmit={handleSubmit}>
            <label>email</label>
            <div className="input-div">
                <input type="email"
                    name={inputEmailName}
                    style={{
                        borderColor: borderColorInputEmail
                        }}
                    onChange ={(e) => {
                        setEmail(e.target.value)
                        checkingEmail(e.target.value)
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
            <label>password</label>
            <div className="input-div input-red-border-focus">
                <input className="input"
                    type={typeInput}
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
                <button type="button"
                    onClick = {() => {
                        if(typeInput === "password"){
                            setTypeInput("text")
                        } else {
                            setTypeInput("password")
                        }
                    }}
                    alt="eye">
                </button>
            </div>
            <div className="password-requirements">
                <h2 className="first-req"
                    style={{
                        color: passReguirementCharacters ? "green" : "red"
                        }}>
                    At least 8 characters
                </h2>
                <h2 className="second-req"
                    style={{
                        color: passReguirementLetter ? "green" : "red"
                        }}>
                    At least one letter
                </h2>
                <h2 className="third-req"
                    style={{
                        color: passReguirementDigit ? "green" : "red"
                        }}>
                    At least one digit
                </h2>
            </div>
            <div className="container-btn">
                <a href={url}>
                    Log in instead
                </a>
                <button 
                    className="first-step-sub-btn"
                    disabled={allow}>
                    Next step
                </button>
            </div>
        </form>
    </div>
  )
}
