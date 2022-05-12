const response = require('koa/lib/response')
const acciones = require('../../actions/acciones')

exports.getAllUsers = (ctx) => {
  let response = acciones.getAllUsers()
  if (response != false){
    ctx.body =  {
      status: 200,
      Users: response
    }
  } else {
    ctx.body = {
      status : 404,
      message : 'there are no users'
    }
  }
}

exports.getUser = (ctx) => {
  let email = ctx.request.body.email
  let password = ctx.request.body.password
  let response = acciones.getUser(email,password)
  if (typeof response === 'undefined'){
    ctx.body = {
      status: 204,
      message: 'usuario no encontrado'
    }
  }else{
    ctx.body = {
      status: 200,
      User: response
    }
  }
}