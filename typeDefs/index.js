const { productQueries, productTypes, productMutations } = require('./Product')
const { userQueries, userTypes } = require('./User')

exports.typeDefs = `
    type Query {
        ${userQueries}
        ${productQueries}
    }
    type Mutation {
        ${productMutations}
    }
    type User {
        ${userTypes}
    }
    type Product {
        ${productTypes}
    }
`