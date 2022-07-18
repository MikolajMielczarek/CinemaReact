import { useState } from 'react';
import './App.css';
import FirstStep from './components/FirstStep';
import Header from './components/Header';
import SecondStep from './components/SecondStep';
import Succes from './components/Succes';



function App() {
  //display and display2 use for show or hide content
  const [display, setDisplay] = useState(true);
  const [display2, setDisplay2] = useState(true);
  const [email, setEmail] = useState('georgia.swanson@monterail.com');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('Georgia');
  const [lastName, setLastName] = useState('Swanson');
  const [dateBirth, setDateBirth] = useState('');

  //for ex for future use...
  const user = {
    email,
    pass,
    name,
    lastName,
    dateBirth
  }

  //function to show/hide first step
  const changeShow = (email, pass, change) => {
    setEmail(email);
    setPass(pass);
    setDisplay(change);
  }

  //function to show/hide second step
  const changeShow2 = (name, lastName, dateBirth, change) => {
    setName(name);
    setLastName(lastName);
    setDateBirth(dateBirth)
    setDisplay2(change);
  }

  //function to show/hide succes
  const changeShowSucces = (change) => {
    setDisplay(change)
    setDisplay2(change)
  }

  return (
    <div className='container-page'>

      <Header />

      { display && display2 &&
      <FirstStep show={changeShow} />
      }

      { !display && display2 &&
      <SecondStep show={changeShow2} />
      }

      { !display && !display2 &&
      <Succes name={name} email={email} show={changeShowSucces} />
      }

    </div>
  );
}

export default App;
