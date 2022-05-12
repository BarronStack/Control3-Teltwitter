const generadorUsuarios = require('../data/users')
const usuarios = require('../data/UsuariosTweets.json')
let dataGenerados = generadorUsuarios.getUsers()

exports.getAllUsers = () =>{
  return dataGenerados
}

exports.getUser = (email,password) => {
  let dataUsuarios = usuarios.usuarios
  const encontrar = dataUsuarios.find(function(element){
    return (element.email == email && element.password == password)
  })

  return encontrar
}