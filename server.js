import { fastify } from 'fastify'
import { DatabasePostgres } from './database-postgres.js';

const server = fastify();
const database = new DatabasePostgres


// database.read() //GET
// database.create() //POST
// database.update() //PUT
// database.delete() //DELETE


// endpoints
server.get('/', async () => {
  const artigos = database.read();
  return artigos;
});


server.listen({
  port: 3333,
})