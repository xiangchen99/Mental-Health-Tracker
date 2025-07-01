import { Hono } from 'hono'
import userInfo from './routes/userInfo'

const app = new Hono().basePath('/api')

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/user', userInfo)

export default app
