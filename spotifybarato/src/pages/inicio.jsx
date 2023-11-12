import React from "react";
import styles from'../styles/inicio.module.css'
import { Link } from "react-router-dom";

function Inicio() {
    return (
        <>
            <body>


                <div className={styles.container}>
                    <aside>
                        <div className={styles.menu}>
                            <Link className={styles.active} to="#"><span><img src={require('../images/home.svg')} alt="" /></span>Inicio</Link>
                            <Link to='/buscador'><span><img src={require('../images/search.svg')} alt="" /></span>Buscar</Link>
                            <Link to="#"><span><img src={require('../images/library.svg')} alt="" /></span>Tu biblioteca</Link> <br />
                            <Link to="#"><span><img src={require('../images/add.svg')} alt="" /></span>Crear lista</Link>
                            <Link to="#"><span><img src={require('../images/heart.svg')} alt="" /></span>Canciones que te gustan</Link>
                        </div>
                    </aside>
                    <section className={styles.casco}>
                        <header>
                            <div className={styles.botones_prev_next}>
                               <Link to='/pago'> <button className={styles.boton}>
                                    Suscribete
                                </button></Link>
                            </div>

                            <div className={styles.suscribcion}>
                                <div className={styles.perfil}>
                                    <span className={styles.circulo}><img src={require('../images/user.svg')} alt="" /></span>
                                    <span className={styles.nombre}>Tu perfil</span>
                                    <span><img src={require('../images/salir.svg')} alt="" /></span>
                                </div>
                            </div>
                        </header>
                        <div className={styles.contenedor_degradado}>
                            <div className={styles.banner}>
                                <div className={styles.cancion}>
                                    <figure>
                                        <img src={require('../images/Copia de Leoncito.png')} alt="" />
                                    </figure>
                                </div>
                                <div className={styles.cancion}>
                                    <figure>
                                        <img src={require('../images/Copia de Leoncito.png')} alt="" />
                                    </figure>
                                </div>
                                <div className={styles.cancion}>
                                    <figure>
                                        <img src={require('../images/Copia de Leoncito.png')} alt="" />
                                    </figure>
                                </div>
                                <div className={styles.cancion}>
                                    <figure>
                                        <img src={require('../images/Copia de Leoncito.png')} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contenedor_contenido}>
                            <div className={styles.titulos}>
                                <h1>¡Buenos días!</h1>
                            </div>
                            <div className={styles.generos}>
                                <div className={styles.cards}>
                                    <div className={styles.card_imagen}><img src={require('../images/Jimena.png')} alt="" /></div>
                                    <div className={styles.card_text}>
                                        <h4>:)</h4>
                                        <img src={require('../images/play.svg')} alt="" />
                                    </div>
                                </div>
                                <div className={styles.cards}>
                                    <div className={styles.card_imagen}><img src={require('../images/RauwMix.png')} alt="" /></div>
                                    <div className={styles.card_text}>
                                        <h4>Rauw Alejandro mix</h4>
                                        <img src={require('../images/play.svg')} alt="" />
                                    </div>
                                </div>
                                <div className={styles.cards}>
                                    <div className={styles.card_imagen}><img src={require('../images/RHLM.png')} alt="" /></div>
                                    <div className={styles.card_text}>
                                        <h4>Real hasta la muerte</h4>
                                        <img src={require('../images/play.svg')} alt="" />
                                    </div>
                                </div>
                                <div className={styles.cards}>
                                    <div className={styles.card_imagen}><img src={require('../images/Rdia23.png')} alt="" /></div>
                                    <div className={styles.card_text}>
                                        <h4>Rdia23</h4>
                                        <img src={require('../images/play.svg')} alt="" />
                                    </div>
                                </div>
                                <div className={styles.cards}>
                                    <div className={styles.card_imagen}><img src={require('../images/VST.png')} alt="" /></div>
                                    <div className={styles.card_text}>
                                        <h4>Un verano sin ti</h4>
                                        <img src={require('../images/play.svg')} alt="" />
                                    </div>
                                </div>
                                <div className={styles.cards}>
                                    <div className={styles.card_imagen}><img src={require('../images/Scorp.png')} alt="" /></div>
                                    <div className={styles.card_text}>
                                        <h4>Scorpion</h4>
                                        <img src={require('../images/play.svg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.titulos}>
                                <h2>Tus podcast</h2>
                                <span>Aquí tienes tu contenido preferido</span>
                            </div>

                            <div className={styles.podcast}>
                                <div className={styles.card_podcast}>
                                    <img src={require('../images/F1L.png')} alt="" />
                                    <h4>F1nal lap</h4>
                                    <p>troop audio</p>
                                </div>
                                <div className={styles.card_podcast}>
                                    <img src={require('../images/FutP.png')} alt="" />
                                    <h4>Fútbol picante</h4>
                                    <p>ESPN deportes</p>
                                </div>
                                <div className={styles.card_podcast}>
                                    <img src={require('../images/Edge.png')} alt="" />
                                    <h4>F1 On The Edge</h4>
                                    <p>The Ringer</p>
                                </div>
                                <div className={styles.card_podcast}>
                                    <img src={require('../images/Cuent.png')} alt="" />
                                    <h4>Cuentos para dormir</h4>
                                    <p>Cuentos AMG</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer>
                        <div className={styles.controles}>
                            <img src={require('../images/prev_footer.svg')} alt="" />
                            <img src={require('../images/play_footer.svg')} alt="" />
                            <img src={require('../images/next_footer.svg')} alt="" />
                        </div>
                        <div className={styles.progreso}>
                            <span>0:00</span>
                            <div className={styles.barra_progreso}></div>
                            <span>5:00</span>
                        </div>
                    </footer>
                </div>
                </body>
            </>
            )
}

            export default Inicio;
