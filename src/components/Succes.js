


export default function Succes(props) {

    //to show first step and hide succes
    const handleClick = () => {
        props.show(true)
    }

  return (
    <div className="registration success-message">

        <h1 className="h1-name h1-grey-1">Good job {props.name}!</h1>
    
        <h3 className="h3-email">We have sent you an email to <span>{props.email}</span>.<br />
        Make sure to click the link from the message to activate your account.
        </h3>

        <div className="container-btn-2">
            <button className="last-btn"
            onClick={handleClick}>Go to homepage</button>
        </div>

    </div>
  )
}
