//==============================
// CARGAR PEDIDO
//==============================

const pedido = JSON.parse(localStorage.getItem("pedido")) || [];

const resumen = document.getElementById("resumenPedido");

const totalCheckout = document.getElementById("totalCheckout");

function cargarPedido(){

    resumen.innerHTML = "";

    let total = 0;

    if(pedido.length === 0){

        resumen.innerHTML = `

            <p style="text-align:center;font-size:20px;color:#777;">

                Tu carrito está vacío.

            </p>

        `;

        totalCheckout.innerHTML = "$0";

        return;

    }

    pedido.forEach(producto=>{

        total += producto.precio * producto.cantidad;

        resumen.innerHTML += `

        <div class="item-checkout">

            <img
            src="${producto.imagen}"
            alt="${producto.nombre}">

            <div class="item-info">

                <h3>

                    ${producto.nombre}

                </h3>

                <p>

                    Marca:
                    ${producto.marca}

                </p>

                <p>

                    Cantidad:
                    ${producto.cantidad}

                </p>

                <p>

                    ${producto.descripcion}

                </p>

            </div>

            <div class="item-precio">

                $${(producto.precio * producto.cantidad).toLocaleString()}

            </div>

        </div>

        `;

    });

    totalCheckout.innerHTML =
    "$" + total.toLocaleString();

}

//==============================
// CONFIRMAR COMPRA
//==============================

document.getElementById("formCompra")

.addEventListener("submit",function(e){

    e.preventDefault();

window.location.href="compra-exitosa.html";

});

//==============================

cargarPedido();