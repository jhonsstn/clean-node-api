import express from 'express'

const app = express()

app.listen(5050, () => {
  console.log('Server is running at http://localhost:5050')
}
)
