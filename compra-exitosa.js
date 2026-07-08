// Número de pedido aleatorio

const numero =
"VC" + Math.floor(Math.random()*900000+100000);

document.getElementById("numeroPedido").innerHTML = numero;

// Vaciar carrito

localStorage.removeItem("carrito");

localStorage.removeItem("pedido");