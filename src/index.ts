import { server } from './server/server'

server.listen(3333, () => {
  console.log('🎃 HTTP server running on port http://localhost:3333')
})