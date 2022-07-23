import logo from '../assets/logo.svg';
import love from '../assets/love.svg';

export default function Header() {
  return (
    <header className="header">
        <img 
          className='header__logo'
          src={logo}
          alt="logo of cinema"
        />
        <img
          className='header__love'
          src={love}
          alt="love sign"
        />
    </header>
  )
}
