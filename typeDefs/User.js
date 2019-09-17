exports.userQueries = `
    users: [User]
    user(id: Int): User
    cartProducts: [Product]
    productsForSale: [Product]
`

exports.userTypes = `
    id: Int
    name: String
    age: Int
    email: String
    cartProducts: [Product]
    productsForSale: [Product]
`