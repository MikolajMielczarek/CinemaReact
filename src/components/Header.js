import logo from '../assets/logo.svg';
import love from '../assets/love.svg';

export default function Header() {
  return (
    <header className="main-header">

        <img 
          className='main-header--logo'
          src={logo}
          alt="logo of cinema"
        />
        
        <img
          className='main-header--love'
          src={love}
          alt="love sign"
        />

    </header>
  )
}
