import styles from "../styles/login_user.module.css";
import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import icongogle from "../images/google.png";

function Login() {
  
  //validacion del login de Facebook
  // Creamos el estado para almacenar los datos del usuario de Facebook
  const [userData, setUserData] = useState(null);

  // Manejador de click para el botón de Facebook
  const handleFacebookLogin = (response) => {
    // Almacenamos los datos del usuario en el estado
    setUserData(response);
    console.log("URL de la imagen de perfil de Facebook:", response.picture);
  };

  // Manejador de click para el botón de cierre de sesión
  const handleLogout = () => {
    // Limpiamos los datos del usuario estableciendo el estado en null
    setUserData(null);
  };

  //Validacion del login de google
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  //Agregamos constantes donde loggedIn, setLoggedIn son dos variables que funcionaran para arrogar solamente la información
  const [loggedIn, setLoggedIn] = useState(false);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      //Se agrega un setLoggedIn(true); para mostrar que el usuario o información elegido sea verdadero
      setLoggedIn(true);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // Función de cierre de sesión para cerrar la sesión del usuario en Google y establecer la matriz de perfil en nulo
  //Se agrega un SetUser y SetLoggedIn para validar la informacion logeada y nos arrogue solo la info
  const logOut = () => {
    googleLogout();
    setUser(null);
    setProfile(null);
    setLoggedIn(false);
  };

  const playlistId = '7dXiYBXRC8dNcMQfHe9BGM';

  

  return (
    <>
    {/* <iframe
  title="Spotify Embed: Recommendation Playlist "
  src={`https://open.spotify.com/embed/playlist/7dXiYBXRC8dNcMQfHe9BGM?utm_source=generator&theme=0`}
  width="100%" height="100%" style={{ minHeight: '740px' }} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
/> */}
      <div class={styles.navbar}>
        <div class={styles.navbar}>
          <img
            class={styles.logo}
            src={require("../images/Untitled.png")}
            alt="Logo"
          />
        </div>
      </div>
      <body className={styles.casa}>
        <div class={styles.container}>
          <h1>Inicia sesión en Yeezy</h1>
          <div class={styles.sociallogin}>
            {/* <button class="google"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>                      Iniciar con Google</button> */}

            {/* Google Login */}
            {!loggedIn && (
              <>
                <button class={styles.Sign} onClick={() => login()}>
                  <img src={icongogle} class={styles.go} alt="" />
                  Continuar con Google
                </button>
              </>
            )}

            {/* Una vez el nodo del fragmento cierra sesión devuelve los valores anteriores de los input */}
            {profile && (
              <div class="trev">
                <h3 class={styles.int}>Usuario Registrado con Google</h3>
                <img
                  src={profile.picture}
                  class={styles.image}
                  alt="user image"
                />
                <p class={styles.int}>Nombre: {profile.name}</p>
                <p class={styles.int}>Correo Electronico: {profile.email}</p>
                <button class={styles.out} onClick={logOut}>
                  Cerrar Sesión
                </button>
              </div>
            )}




            {/* Facebook Login */}
            {/* Botón de inicio de sesión de Facebook */}
            <FacebookLogin
              appId="1283592775680508"
              autoLoad={false}
              fields="name,email,picture"
              onClick={() => console.log("Evento Click")}
              callback={handleFacebookLogin}
              textButton="Registrate con Facebook"
              icon="fa-facebook"
              cssClass="facebook"
            />

            {/* Mostramos los datos del usuario si están disponibles de Facebook */}
            {userData && (
              <div>
                <p className={styles.nom}>Nombre: {userData.name}</p>
                <p className={styles.corr}>Correo electrónico: {userData.email}</p>
                <img className={styles.fot} src={userData.picture.data} alt="Foto de perfil"  />
                {/* Botón de cierre de sesión */}
                <button onClick={handleLogout}>Cerrar sesión</button>
              </div>
              
            )}

            {/* <button class="facebook"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>                      Iniciar con Facebook</button> */}

            <button class="apple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-apple"
                viewBox="0 0 16 16"
              >
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
              </svg>{" "}
              Iniciar con Apple
            </button>
            <button class="Telefono">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>{" "}
              Continuar con teléfono{" "}
            </button>
          </div>
          <div class={styles.ordivider}>
            <div class={styles.line}></div>
            <div class={styles.line}></div>
            <div class={styles.line}></div>
          </div>
          <div class={styles.phonelogin}>
            <form className={styles.phonelogin}>
              <input
                className={styles.phonelogin}
                type="text"
                placeholder="Email o nombre de usuario"
              />
              <input
                className={styles.phonelogin}
                type="tel"
                placeholder="Contraseña"
              />
              <Link to="/inicio">
                {" "}
                <button className={styles.phonelogin} type="submit">
                  Inicia sesión
                </button>
              </Link>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}

export default Login;