import express from 'express'
import setMiddlewares from './middlewares'
import setRoutes from './routes'

const app = express()
setMiddlewares(app)
setRoutes(app)

export default app
