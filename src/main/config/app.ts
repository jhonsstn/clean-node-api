import express from 'express'
import setMiddlewares from './middlewares'

const app = express()
setMiddlewares(app)

export default app
