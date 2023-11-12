import React from "react";
import Navdash from "../components/Navdash";


function Dash(){
    return(
<>
<div class="backoffice">
                <Navdash />
                <div class="main-content">
                    <header>
                        <img className="img" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6XOmDYqf7bK_ObWr2tFXP0IYWIf3j2ckzBMcNZE8LkuZfGcOO"></img>
                        <h1>Bienvenido</h1>
                    </header>
                    <div class="content">

                        <p>Aquí puedes administrar usuarios, productos, pedidos, etc.</p>
                    </div>
                </div>
            </div>
</>
    )
}
export default Dash;
