import React from 'react'
import { Link } from 'react-router-dom'

/*Styles*/
import '../../assets/styles/components/header/header.scss'

/*Images*/
import userDefaultLogo from '../../assets/img/Header/User_Photo.png'


// const Header = () => {
  // const { authUser } = React.useContext(authContext)

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <p className="header__name">DarkWeb</p>
      </Link>
      
      <div className="header__menu">
        <div className="header__menu--profile">
          {
            //?(
              <>
              <img className="header__img--porfile" src={userDefaultLogo} alt="UserLogo"/>
              <p className="header__p--porfile">Account</p>
              </>
            //):(
            //  <>
            //  <img className="header__img--porfile" src={userDefaultLogo} alt="UserLogo"/>
            //  <p className="header__p--porfile">{authUser}</p>
            //  </>
            // )
          }
        </div>
        <ul>
          {
            // (authUser === "default") ?(
              <>
              <li><Link to ="/login">Iniciar Sesion</Link></li>
              <li><Link to="/signin">Crear Cuenta</Link></li>
              </>
            // ):(
            //   <>
            //   <li><Link to ="/login">Cuenta</Link></li>
            //   <li><Link to ="/login">Configuracion</Link></li>
            //   </>
            // )
          }
        </ul>
      </div>
    </header>
  )
}

export default Header