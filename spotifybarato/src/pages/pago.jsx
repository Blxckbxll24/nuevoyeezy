import React , {useState}from "react";
import styles from '../styles/pago.module.css'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from "axios";

const PAYPAL_CLIENT_ID = 'AdwObl8zvI4sB0iG1UJi85kaIBMaL8wQkh6obtqTqNIrS-z7gVfM7KZB61jlnzC_w9zMzuIJDDeO-DuS';
initMercadoPago("TEST-b17ac1d1-6acf-4b6c-ac1b-01e05efd2fca");




function Pago() {
  const [preferenceId, setPreferenceId] = useState(null);

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:8082/create_preference", {
        description: "Yeezy Music INC.",
        price: 129,
        quantity: 1,
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };
  const handleBuy = async () => { // Recibimos el precio como argumento
    const id = await createPreference(); // Pasamos el precio como argumento
    if (id) {
      setPreferenceId(id);
       // Mostramos la mini-pestaña popup cuando se obtiene el ID de preferencia
    }
  };
  
    return (
        <><body>
<PayPalScriptProvider options={{ "client-id": PAYPAL_CLIENT_ID, "currency": "MXN" }}>
       
        <header class={styles.Cabecilla}>
            <p class={styles.Idioma}> México (Español)</p>
            
        </header>
    
        
        <section class={styles.Ramt}>
        <div className={styles.suscribcion}>
                                <div className={styles.perfil}>
                                    <span className={styles.circulo}><img src={require('../images/user.svg')} alt="" /></span>
                                    <span className={styles.nombre}>Tu perfil</span>
                                    <span><img src={require('../images/salir.svg')} alt="" /></span>
                                </div>
                            </div>
    
        
        <article class={styles.Mediante}>
            <div class={styles.nest}>
                <p class={styles.Plan}>Tu plan</p>
                <p class={styles.Cambiar}></p>
            </div>
            <div class={styles.cajamedio}>
            <div class={styles.Par1}>
                <p class={styles.PILL}>Premium</p>
                <p class={styles.PILLS}>Cuenta Premium</p>
            </div>
            <div class={styles.Par2}>
                <p class={styles.PILL2}>Apartr de Hoy</p>
                <p class={styles.PILL2}>Proxima fecha de facturación</p>
                <p class={styles.PILL2}>129,00 MXN al mes</p>
                <p class={styles.PILL2}>28-Sep-23</p>
            
            <div class={styles.Par3}>
                <p class={styles.PILL3}>Luego, tu fecha de facturación será el 20 sep 2023</p>
                <p class={styles.PILL3}>Cancela cuando quieras. Se aplican <a href="#" class="Ter">Términos de la oferta</a></p>
            </div>
        </div>
            </div>
        </article>
        <article className={styles.arr}>
          <h3>Métodos de pago</h3>
        <PayPalButtons className={styles.pay}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: 129,
                      },
                    },
                  ],
                });
              }}
              
              onError={(error) => {
                console.error("Error al procesar el pago:", error);
              }}
            />
        </article> 
         <Wallet initialization={{ preferenceId }} />
    </section>
    </PayPalScriptProvider>
    </body>
    

        </>
    )
}

export default Pago;
