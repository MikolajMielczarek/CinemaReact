import logo from '../assets/logo.svg';
import love from '../assets/love.svg';

export default function Header() {
  return (
    <div className="container-header">
        <img src={logo} alt="logo of cinema" />
        <img src={love} alt="love" />
    </div>
  )
}
