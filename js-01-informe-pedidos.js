// Desarrollo de programa para tener un informe de pedidos

let pedido = {
    id: 0,
    importe: 0,
    estado: false
}

let pedido1 = {...pedido, id: 101, importe: 45, estado: true }
let pedido2 = {...pedido, id: 102, importe: 30, estado: false }
let pedido3 = {...pedido, id: 103, importe: 80, estado: true }
let pedido4 = {...pedido, id: 104, importe: 25, estado: false }
let pedido5 = {...pedido, id: 105, importe: 20, estado: true }
let pedido6 = {...pedido, id: 106, importe: 60, estado: true }

let arrayPedido = [pedido1, pedido2, pedido3, pedido4, pedido5, pedido6 ]

function informePedidos(){

    let numPedidos = 0
    let pagados = 0
    let pendientes = 0
    let totalPagado = 0
    let totalPendientes = 0
    let importeTotalPedidos = 0
    let arrayIdPagados = []
    let arrayIdPendientes = []
    
    for (let pedidoActual of arrayPedido){
        if (pedidoActual.estado === false){
            pendientes += 1
            totalPendientes += pedidoActual.importe
            arrayIdPendientes.push("P-" + pedidoActual.id)
        }else{
            pagados +=1
            totalPagado += pedidoActual.importe
            arrayIdPagados.push("P-" + pedidoActual.id)
        }
        numPedidos += 1
        importeTotalPedidos += pedidoActual.importe
    }

    console.log(`Numero de pedidos ${numPedidos}`)
    console.log(`Numero de pedidos pagados ${pagados}`)
    console.log(`Numero de pedidos pendientes ${pendientes}`)
    console.log(`Importe total pagado: ${totalPagado}`)
    console.log(`Importe total pendiente: ${totalPendientes}`)
    console.log(`Importe total de los pedidos: ${importeTotalPedidos}`)
    console.log(`id de los pedidos pagados: ${arrayIdPagados.join(", ")}`)
    console.log(`id de los pedidos pendientes: ${arrayIdPendientes.join(", ")}`)
}

informePedidos()

