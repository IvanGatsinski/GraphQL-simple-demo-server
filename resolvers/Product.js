const { users, products } = require('../dummy_data')

exports.productQueries = {
        product(parent, { id }) {
            return products.find(product => product.id === id)
        },
        products() {
            return products
        },
}
exports.productMutations = {
        addProduct(parent, args) {
            console.log(args)
            return products.push(args)
        }
}
exports.productsOwner = {
        owner({ ownerId }) {
            return users.find(user => user.id === ownerId)
        }
}