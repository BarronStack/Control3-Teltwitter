import React, {Component, useState} from "react";
import '../assets/css/login.css'



class Login extends Component {
    render () {
        return (
            <form>
                <div className="title-container">
                    <h2> Tel-Twitter</h2>

                    <div className="input-container">
                        <label htmlFor="usuario"> Usuario:</label> 
                        <input type="text" name="usuario" id="usuario"></input>   
                    </div>

                    <div className="input-container">
                        <label htmlFor="contraseña"> Contraseña:</label> 
                        <input type="text" name="contraseña" id="contraseña"></input>   
                    </div>
                </div>
                    

            </form>
        );
    }
}

export default Login;