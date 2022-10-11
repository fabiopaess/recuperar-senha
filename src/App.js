import { useState } from 'react';
import './styles.css'

function App() {
  const[email, setEmail] = useState("")

  return (
   <div className ="container">
     <div className = "container-login">
      <div className = "wrap-login">
        <form className= "login-form">
          <span className= "login-form-title">Recuperar Senha</span>

          <div className= "wrap-input">
            <input 
            className= {email !== "" ? 'has-val input' : 'input'}
            type= "email"
            value={email}
            onChange={e => setEmail(e.target.value)}/>
            <span className= "focus-input" data-placeholder= "Email"></span>
          </div>

          <div className= "container-login-form-btn">
            <button className= "login-form-btn">Cancelar</button>
            <button className= "login-form-btn">Enviar</button>
          </div>

        </form>
      </div>
     </div>
   </div>
  );
}

export default App;
