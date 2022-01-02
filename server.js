const Http = require('http')
const Express = require('express')
const App = Express()
const Server = Http.createServer(App)
const Dotenv = require('dotenv')
const Morgan = require('morgan')

// App.use(Dotenv.config({ path: 'Config.env' }))
App.use(Morgan('dev'))
App.use(Express.urlencoded({ extended: true }))
App.use(Express.json())

const PORT = process.env.PORT || 8888

Server.listen(PORT, () => { console.log(`Server running in port ${ PORT }`) })

