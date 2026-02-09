import './Header.css'
import losSantosMotorsLogo from '../../assets/los-santos-motors.svg'

interface HeaderProps {
  title: string
  subtitle?: string
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="header-store">
      <a href="/">
        <img src={losSantosMotorsLogo} alt="logo" />
      </a>
      <h1>{title}</h1>

      {subtitle && <p>{subtitle}</p>}
    </header>
  )
}
