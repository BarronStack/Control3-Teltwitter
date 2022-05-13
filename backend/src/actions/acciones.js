const generadorUsuarios = require('../data/users')
let datos = require('../data/UsuariosTweets.json')
let dataGenerados = generadorUsuarios.getUsers()

/*Usuarios*/
exports.generarUsuarios = () =>{
  return dataGenerados
}

exports.getUser = (email,password) => {
  let dataUsuarios = datos.usuarios
  const encontrar = dataUsuarios.find(function(element){
    return (element.email == email && element.password == password)
  })

  return encontrar
}
/*Tweets*/
exports.getAlltweets = () => {
  let dataTweets = datos.tweets
  return dataTweets
}
exports.newTweet = (author,text) => {
  if ((typeof author === 'undefined')||(typeof text === 'undefined')) {
    return false
  } else {
    let nuevo = {
      author,
      text,
      timestamp: Date.now()
    }
    datos.tweets.push(nuevo)
    return nuevo 
  }
  
}