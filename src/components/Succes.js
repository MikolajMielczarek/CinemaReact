

export default function Succes(props) {

    //to show first step and hide succes
    const finishRegistration = () => {
        props.show(true);
    }

  return (
    <section className="registration success-message">
      <header className="registration__headings">
        <h1 className="registration__headings__succes registration__headings__heading">
          Good job {props.firstName}!
        </h1>
      </header> 
      <h3 className="registration--succesh3">
        We have sent you an email to&nbsp; 
        <span className="registration--succesh3--span">{props.email}</span>.<br />
        Make sure to click the link from the message to activate your account.
      </h3>
      <div className="registration--succes-div-button">
          <button
            className="registration--succes-div-button--button"
            onClick={finishRegistration}>
            Go to homepage
          </button>
      </div>
    </section>
  )
}
