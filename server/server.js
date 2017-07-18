import graphqlHttp from 'koa-graphql'
import Koa from 'koa'
import schema from './data/schema'
import mount from 'koa-mount'
import './db'
const app = new Koa()

app.use(async (ctx, next) => {
  ctx.status = 200
  ctx.body = 'hello world'
  await next()
})

app.use(mount('/graphql', graphqlHttp({
  schema: schema,
  graphiql: true,
  pretty: true,
  extensions: ({ document, variables, operationName, result }) => ({ runtime: new Date() + '' })
})))

const server = app.listen(8080, () => {
  const port = server.address().port
  console.log(`graphql running at http://localhost:${port}/graphql`)
})
