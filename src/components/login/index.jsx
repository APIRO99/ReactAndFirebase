import React/*, { useState }*/ from 'react'


/*Components*/
import { FacebookLogo, GoogleLogo } from "../../assets/img"

/*Styles*/
import '../../assets/styles/components/signin/signin.scss'


class Login extends React.Component {

  handleSubmit(){

  }

  handleInput(){

  }

  render(){
    return(
      <section className="Signin">
      <section className="Signin__container">
        <h2>Crear Usuario</h2>
        <form className="Signin__container--form" onSubmit={this.handleSubmit}>
          <input   name="user"                className="input"     type="text"         placeholder="Usuario"                onChange={this.handleInput}   />
          <input   name="name"                className="input"     type="text"         placeholder="Nombre"                 onChange={this.handleInput}   />
          <input   name="email"               className="input"     type="text"         placeholder="Correo"                 onChange={this.handleInput}   />
          <input   name="password"            className="input"     type="password"     placeholder="Contraseña"             onChange={this.handleInput}   />
          <input   name="confirmPassword"     className="input"     type="password"     placeholder="Confirmar Contraseña"   onChange={this.handleInput}   />
          
          <button   className="button">Crear Usuario</button>
        </form>
        <section className="Signin__container--social-media">
          <div><img src={FacebookLogo} alt="Facebook" /><a href="/">Registrate con Facebook</a></div>
          <div><img src={GoogleLogo} alt="Google" /><a href="/">Registrate con Google</a></div>
        </section>
      </section>
      </section>
    )
  }
}


export default Login