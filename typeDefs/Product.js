exports.productQueries = `
    product(id: Int): Product
    products: [Product]
    owner: User
`
exports.productMutations = `
    addProduct(id: Int!, name: String!, price: Int!): Product
`
exports.productTypes = `
    id: Int
    name: String
    price: Int
    quality: String
    owner: User
`