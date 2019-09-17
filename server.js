const app = require('express')()
const graphqlHTTP = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools')
const { typeDefs } = require('./typeDefs/index')
const { resolvers } = require('./resolvers/index')

const port = process.env.PORT || 3000

const graphql = graphqlHTTP({
    schema: makeExecutableSchema({
        typeDefs,
        resolvers
    }),
    graphiql: true
})
app.use('/graphql', graphql)

app.listen(port,() => { console.log(`Server started on port ${port}`) })