botonSubTotal = document.getElementById("subBtn");
botonImpuesto = document.getElementById("taxBtn");
botonTotal = document.getElementById("totalBtn");

botonSubTotal.onclick = function subtotal() {
    let valor = document.calculadora.precio.value;
    var cantidad = document.calculadora.cantidad.value;
    precioProducto = valor * cantidad;
    document.calculadora.subtotal.value = precioProducto.toFixed(2);
    return precioProducto;
}

botonImpuesto.onclick = function calcularImpuesto() {
    var subtotal = document.calculadora.subtotal.value;
    var impuesto = 1.65;
    let tax = subtotal * impuesto;
    document.calculadora.impuesto.value = tax.toFixed(3);
    return tax;
}

botonTotal.onclick = function total() {
    let subtotal = document.calculadora.subtotal.value;
    let tax = document.calculadora.impuesto.value;
    var total = parseFloat(subtotal) + parseFloat(tax);
    console.log(total);
    document.calculadora.total.value = total.toFixed(2);
    return total;
}