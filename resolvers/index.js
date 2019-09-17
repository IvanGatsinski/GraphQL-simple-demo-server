const { productQueries, productMutations, productsOwner } = require('./Product')
const { userQueries, userCartProducts } = require('./User')

const resolvers  = {
    Query: {...productQueries, ...userQueries},
    Mutation: productMutations,
    User: userCartProducts,
    Product: productsOwner,
}

exports.resolvers = resolvers