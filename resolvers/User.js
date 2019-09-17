const { users, products } = require('../dummy_data')

exports.userQueries = {
    users() {
        return users
    },
    user(parent, args) {
        return users.find(user => user.id === args.id)
    },
}
exports.userCartProducts = {
    cartProducts({ cartProductIds }) {
        const cartProducts = []

        cartProductIds.forEach(id => {
            products.forEach(product => {
                if (id === product.id) {
                    return cartProducts.push(product)
                }
            })
        });
        return cartProducts
    },
    productsForSale({ productsForSaleIds }) {
        const productsForSale = []
        
        productsForSaleIds.forEach(id => {
            products.forEach(product => {
                if (id === product.ownerId) {
                    return productsForSale.push(product)
                }
            })
        });
        return productsForSale
    }
}