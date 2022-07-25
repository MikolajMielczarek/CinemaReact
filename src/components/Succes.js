

export default function Succes(props) {

    //to show first step and hide succes
    const finishRegistration = () => {
        props.show(true);
    }

  return (
    <section className="success-message">

      <header>
        <h1 className="registration__headings--succes">
          Good job {props.firstName}!
        </h1>
      </header> 
      
      <h3>
        We have sent you an email to&nbsp; 
        <span>{props.email}</span>.<br />
        Make sure to click the link from the message to activate your account.
      </h3>

      <div>
          <button onClick={finishRegistration}>
            Go to homepage
          </button>
      </div>

    </section>
  )
}
