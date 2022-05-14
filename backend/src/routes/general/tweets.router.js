const response = require('koa/lib/response')
const acciones = require('../../actions/acciones')

exports.getTweets = (ctx) => {
  let response = acciones.getAlltweets()
  if (typeof response === 'undefined') {
    ctx.body = {
      status: 204,
      message: 'usuario no encontrado'
    }
  }else{
    ctx.body = {
      status: 200,
      tweets: response
    }
  }
}
exports.newTweet = (ctx) => {
  let author = ctx.request.body.author
  let text = ctx.request.body.text
  let response = acciones.newTweet(author,text)
  if (response == false) {
    ctx.body = {
      status: 204,
      message: 'falta autor o texto'
    }
  } else {
    ctx.body = {
      status: 202,
      message: 'se agrego satisfactoriamente',
      tweet: response
    }
  }
}