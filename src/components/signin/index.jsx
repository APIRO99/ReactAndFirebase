import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { createUserEmailPass } from '../../services/Firebase'


/*Components*/
import { FacebookLogo, GoogleLogo, SigninBackground } from "../../assets/img"

/*Styles*/
import '../../assets/styles/components/signin/signin.scss'
//import { eventManager } from 'react-toastify/dist/core'

const Signin = () => {
  //const history = useHistory();
  //const { updateAuthUser } = React.useContext(authContext)

  // const [form, setValues] = useState({
  //     user:             '',
  //     name:             '',
  //     email:            '',
  //     password:         '',
  //     confirmPassword:  ''
  // })
  
  const handleChange = (event) => {
  //   setValues({
  //     ...form,
  //     [event.target.name]: event.target.value
  //   })
  }



  const handleSubmit = async () => {
    // const { email, password, user } = form

    // createUserEmailPass(email, password)
    // .then(response => {
    //   response.user.updateProfile({
    //     displayName: user 
    //   })
    //   response.user.sendEmailVerification({
    //     url: 'http://localhost:3000'
    //   })

    //   updateAuthUser(user)
    //   history.push("/");
    // })
    // .catch(error => {
    //   console.error(error.message)
    // })
  }

  
  return(
    <section className="Signin">
    <section className="Scontainer">
      <h2 className="Scontainer__title">Crear Usuario</h2>
      <form className="Scontainer__form" onSubmit={handleSubmit}>
        <input   name="user"                className="Sinput"     type="text"         placeholder="Usuario"                onChange={handleChange}   />
        <input   name="name"                className="Sinput"     type="text"         placeholder="Nombre"                 onChange={handleChange}   />
        <input   name="email"               className="Sinput"     type="text"         placeholder="Correo"                 onChange={handleChange}   />
        <input   name="password"            className="Sinput"     type="password"     placeholder="Contraseña"             onChange={handleChange}   />
        <input   name="confirmPassword"     className="Sinput"     type="password"     placeholder="Confirmar Contraseña"   onChange={handleChange}   />
          <button   className="Scontainer__submitButton" onSubmit={handleSubmit}>Crear Usuario</button>
      </form>
      
      <section className="Scontainer__socialmedia">
        <Link className="Scontainer__socialmedia--option" to="/">
          <img className="Scontainer__socialmedia--logo" src={FacebookLogo} alt="Facebook" />
          <p className="Scontainer__socialmedia--text">Registrate con Facebook</p>
        </Link>
        <Link className="Scontainer__socialmedia--option"  to="/">
          <img className="Scontainer__socialmedia--logo"src={GoogleLogo} alt="Google" />
          <p className="Scontainer__socialmedia--text">Registrate con Google</p>
        </Link>
      </section>
    </section>
    <figure className="SsideImage">
      <img src={SigninBackground} alt="BackgroundImage"/>
    </figure>
    </section>
  )
}

export default Signin