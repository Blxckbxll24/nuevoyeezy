
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import styles from'../styles/login.module.css';
//import { useState } from 'react';



function Registro() {



    return (
        <>
            <div class={styles.container}>
                <div class={styles.logo}>
                    <img src={require('../images/Untitled.png')} alt="Logo" />
                </div>
                <h2>Regístrate gratis para escuchar</h2>
                <button className={styles.facebookbutton}>Iniciar sesión con Facebook</button>
                <button class={styles.googlebutton}><GoogleOAuthProvider clientId="1065046042069-olh6j8d8q23gbleel6o8oqpp5qhi57pt.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}


                    />
                    
                </GoogleOAuthProvider></button>
                <form>
                    <p>Ingresa tu correo</p>
                    <input type="email" placeholder="Email" />
                    <p>Ingresa tu contraeña</p>
                    <input type="password" placeholder="Contraseña" />
                    <p>¿Cómo quieres que te llamemos?</p>
                    <input type="text" placeholder="Nombre de Usuario" />
                    <p>Ingresa tu fecha de nacimiento</p>
                    <input type="date" placeholder="Fecha de Nacimiento" />
                    <p>Sexo:</p>
                    <label style={{ display: 'inline-block', marginRight: '10px' }}>
                        <input type="radio" name="sexo" value="Hombre" />
                        Hombre
                    </label>
                    <label style={{ display: 'inline-block', marginRight: '10px' }}>
                        <input type="radio" name="sexo" value="Hombre" />
                        Mujer
                    </label>
                    <label style={{display: 'inline-block'}}><input type="radio" name="sexo" value="Otro" /> Otro</label>
                    <button class={styles.registrobutton}>Registrarse</button>
                </form>
                <p id="inicio-sesion-link">¿Ya tienes una cuenta? <a href="/login">Iniciar Sesión</a></p>


            </div>

        </>

    )
}

export default Registro;
