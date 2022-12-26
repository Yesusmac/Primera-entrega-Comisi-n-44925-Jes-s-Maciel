//algoritmo con condicionales
let hora = prompt(
  'Que hora es? "Ingrese hora de 0 a 24, solo hora sin minutos"',
)

if (hora >= 0 && hora <= 5) {
  alert('Dejame dormir')
} else if (hora >= 6 && hora <= 11) {
  alert('Buenos días')
} else if (hora >= 12 && hora <= 18) {
  alert('Buenas tardes')
} else {
  alert('Buenas noches')
}

// algoritmo utilizando ciclo

let intentos = 3
let palabraClave = 'AguanteRiver'

for (let i = 1; i <= intentos; i++) {
  let ingresoUsuario = prompt('ingresa la palabra clave "AguanteRiver" ')
  if (ingresoUsuario === palabraClave) {
    alert('El mas grande')
    break
  } else {
    alert('Nah! Sos Bostero')
  }
}

//Simulador

let PIN = '0279'

function login() {
  let ingresar = false
  for (let i = 2; i >= 0; i--) {
    let userPIN = prompt('Ingresa tu clave "0279')
    if (userPIN === PIN) {
      alert('Bienvenido/a')
      ingresar = true
      break
    } else {
      alert('Su clave es incorrecta, le quedan' + i + ' intentos')
    }
  }
  return ingresar
}
let logueo = login()
console.log(logueo)

if (logueo) {
  let saldo = 350000

  let opcion = prompt(
    'Seleccione una opción: \n1- Consulte su saldo. \n2 - Retiro de dinero. \n3 - Depósito. \n4 Presioná X para finalizar.',
  )

  while (opcion != 'X' && opcion != 'x') {
    switch (opcion) {
      case '1':
        alert('Su saldo es $ ' + saldo)
        break
      case '2':
        let retiro = parseInt(prompt('Ingrese el monto a retirar'))

        if (retiro <= saldo) {
          saldo = saldo - retiro
          alert('Retiro $' + retiro + ' su saldo es  $ ' + saldo)
        } else {
          alert('Saldo insuficente')
        }
        break
      case '3':
        let deposito = parseInt(prompt('Ingrese el monto a depositar'))
        saldo = saldo + deposito
        alert('Depósito exitoso, su nuevo saldo es de $ ' + saldo)
        break

      default:
        alert('Opción no válida')
        break
    }
    opcion = prompt(
      'Desea seguir operando? \n Elija una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \n4 Presioná X para finalizar.',
    )
  }
} else {
  alert('Su tarjeta fue retenida. Comuniquese con su Banco')
}

alert('Gracias por operar con nosotros')

